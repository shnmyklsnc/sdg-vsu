import PageTitle from "../common/page-title";

export default function EvidenceView({
  metric,
  indicator,
  year,
  file,
}: {
  metric: string;
  indicator?: string;
  year: string;
  file: string;
}) {
  return (
    <article role="main">
      <PageTitle title={indicator ? indicator : metric} />
    </article>
  );
}
