"use client";

import { usePDFJS } from "@/hooks/pdf-viewer";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Loader2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import { PDFDocumentProxy, RenderTask } from "pdfjs-dist";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface PDFViewerProps {
  url: string;
  className?: string;
}

export const PDFViewer = ({ url, className }: PDFViewerProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [scale, setScale] = useState(1.0);
  const [pageInputValue, setPageInputValue] = useState("1");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const renderTaskRef = useRef<RenderTask | null>(null);

  usePDFJS(
    useCallback(
      async pdfjs => {
        try {
          setIsLoading(true);
          setError(null);

          // Fetch the PDF as ArrayBuffer to avoid Safari URL parsing issues
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`Failed to fetch PDF: ${response.statusText}`);
          }
          const arrayBuffer = await response.arrayBuffer();

          const loadingTask = pdfjs.getDocument({
            data: arrayBuffer, // Use data instead of url to bypass Safari's URL issues
            withCredentials: false,
            isEvalSupported: false,
            useSystemFonts: true,
            disableAutoFetch: false,
            disableStream: false,
            disableFontFace: false,
          });

          const pdfDoc = await loadingTask.promise;
          setPdf(pdfDoc);
          setNumPages(pdfDoc.numPages);
          setIsLoading(false);
        } catch (err) {
          console.error("Error loading PDF:", err);
          setError(err instanceof Error ? err.message : "Failed to load PDF");
          setIsLoading(false);
        }
      },
      [url]
    )
  );

  // Render the current page
  const renderPage = useCallback(async () => {
    if (!pdf || !canvasRef.current) return;

    try {
      // Cancel any ongoing render
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }

      const page = await pdf.getPage(currentPage);
      const viewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (!context) return;

      // Set canvas dimensions
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
        canvas: canvas,
      };

      renderTaskRef.current = page.render(renderContext);
      await renderTaskRef.current.promise;
    } catch (error) {
      console.error("Error rendering page:", error);
    }
  }, [pdf, currentPage, scale]);

  useEffect(() => {
    renderPage();
  }, [renderPage]);

  // Page navigation
  const goToPreviousPage = () => {
    const newPage = Math.max(1, currentPage - 1);
    setCurrentPage(newPage);
    setPageInputValue(String(newPage));
  };

  const goToNextPage = () => {
    const newPage = Math.min(numPages, currentPage + 1);
    setCurrentPage(newPage);
    setPageInputValue(String(newPage));
  };

  const handlePageInputChange = (value: string) => {
    setPageInputValue(value);
    const pageNum = parseInt(value, 10);
    if (!isNaN(pageNum) && pageNum >= 1 && pageNum <= numPages) {
      setCurrentPage(pageNum);
    }
  };

  const handlePageInputBlur = () => {
    const pageNum = parseInt(pageInputValue, 10);
    if (isNaN(pageNum) || pageNum < 1 || pageNum > numPages) {
      setPageInputValue(String(currentPage));
    }
  };

  // Zoom functions
  const zoomIn = () => setScale(prev => Math.min(2, prev + 0.25));
  const zoomOut = () => setScale(prev => Math.max(0.5, prev - 0.25));
  const setZoomLevel = (value: string) => setScale(parseFloat(value));

  if (error) {
    return (
      <div
        className={cn(
          "bg-card flex min-h-[600px] items-center justify-center rounded-lg border p-8",
          className
        )}
      >
        <div className="text-center">
          <FileText className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
          <p className="mb-2 text-lg font-semibold">Unable to load PDF</p>
          <p className="text-muted-foreground mb-4 text-sm">{error}</p>
          <Button variant="outline" asChild>
            <a href={url} download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div
        className={cn(
          "bg-card flex min-h-[600px] items-center justify-center rounded-lg border",
          className
        )}
      >
        <div className="text-center">
          <Loader2 className="text-muted-foreground mx-auto mb-4 h-12 w-12 animate-spin" />
          <p className="text-muted-foreground text-sm">Loading PDF...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "bg-card flex min-h-[600px] flex-col overflow-hidden rounded-lg border",
        className
      )}
    >
      {/* Toolbar */}
      <div className="bg-muted/50 flex flex-wrap items-center justify-between gap-2 border-b p-2">
        <div className="flex items-center gap-2">
          {/* Page Navigation */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={goToPreviousPage}
              disabled={currentPage <= 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-1">
              <Input
                type="text"
                value={pageInputValue}
                onChange={e => handlePageInputChange(e.target.value)}
                onBlur={handlePageInputBlur}
                className="mr-1 h-8 w-12 text-center text-sm"
              />
              <span className="text-muted-foreground text-sm">
                / {numPages}
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={goToNextPage}
              disabled={currentPage >= numPages}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="bg-border h-4 w-px" />

          {/* Zoom Controls */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={zoomOut}
              className="hover:text-primary dark:hover:text-secondary h-8 w-8"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>
            <Select value={scale.toString()} onValueChange={setZoomLevel}>
              <SelectTrigger className="h-8 w-24">
                <SelectValue>{Math.round(scale * 100)}%</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0.5">50%</SelectItem>
                <SelectItem value="0.75">75%</SelectItem>
                <SelectItem value="1">100%</SelectItem>
                <SelectItem value="1.25">125%</SelectItem>
                <SelectItem value="1.5">150%</SelectItem>
                <SelectItem value="1.75">175%</SelectItem>
                <SelectItem value="2">200%</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="ghost"
              size="icon"
              onClick={zoomIn}
              className="hover:text-primary dark:hover:text-secondary h-8 w-8"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => window.open(url, "_blank")}
            className="hover:text-primary dark:hover:text-secondary"
          >
            <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
            Open
          </Button>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hover:text-primary dark:hover:text-secondary"
          >
            <a href={url} download>
              <Download className="mr-1.5 h-3.5 w-3.5" />
              Download
            </a>
          </Button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="bg-muted/30 relative flex-1 overflow-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <canvas
            ref={canvasRef}
            className="bg-white shadow-lg"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};
