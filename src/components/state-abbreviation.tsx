interface StateAbbreviationTypes {
  state: 'california' | 'nevada';
}
export default function StateAbbreviation({ state }: StateAbbreviationTypes) {
  switch (state) {
    case "california":
      return "CA";
    case "nevada":
      return "NV";
  }
};