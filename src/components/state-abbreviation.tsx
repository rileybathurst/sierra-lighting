type StateAbbreviationType = {
  state: 'california' | 'nevada';
}
export default function StateAbbreviation({ state }: StateAbbreviationType) {
  switch (state) {
    case "california":
      return "CA";
    case "nevada":
      return "NV";
  }
};