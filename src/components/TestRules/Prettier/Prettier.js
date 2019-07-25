export const testPrettierRules = () => {
  /** Prettier: useTabs
   *  Tabulation characters should not be used
   *  Default value: false
   */

  const testUseTabs = {
    useTabs: false
  };
  console.log("testUseTabs: " + testUseTabs.useTabs);

  /** Prettier: printWidth
   *  Specify the line length that the printer will wrap on.
   *  Default value: 80
   */

  const testPrintWidth =
    "testPrintWidth: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper, ipsum a amet.";
  console.log(testPrintWidth);

  /** Prettier: tabWidth
   *  Specify the number of spaces per indentation-level.
   *  Default value: 2
   */

  const testTabWidth = () => {
    console.log("testTabWidth");
  };
  testTabWidth();

  /** Prettier: semi
   *  Print semicolons at the ends of statements.
   *  Default value: true
   */

  const testSemi = ["testSemi"];
  testSemi.forEach(console.log);

  /** Prettier: singleQuote
   *  Use single quotes instead of double quotes.
   *  Default value: false
   */

  console.log("testSingleQuote");

  /** Prettier: quoteProps
   *  Change when properties in objects are quoted.
   *  Default value: "as-needed"
   */

  const testQuoteProps = {
    "1.0": true,
    2: true,
    description: "testQuoteProps"
  };
  console.log(testQuoteProps.description);

  /** Prettier: trailingComma
   *  Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)
   *  Default value: "none"
   */

  const testTrailingComma = {
    description: "testTrailingComma"
  };
  console.log(testTrailingComma.description);

  /** Prettier: bracketSpacing
   *  Print spaces between brackets in object literals.
   *  Default value: true
   */

  const testBracketSpacing = { description: "testBracketSpacing" };
  console.log(testBracketSpacing.description);

  /** Prettier: arrowParens
   *  Include parentheses around a sole arrow function parameter.
   *  Default value: "avoid"
   */

  const testArrowFunctionParentheses = ["testArrowFunctionParentheses"];
  testArrowFunctionParentheses.forEach(element => {
    console.log(element);
  });
};
