/** Prettier: rangeStart
 *  Specify start line to format only a segment of a file.
 *  Default value: 0
 */

/** Prettier: requirePragma
 *  Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file
 *  Default value: false
 */

/** Prettier: insertPragma
 *  Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with prettier.
 *  Default value: false
 */

import React, { Component } from "react";

import { testPrettierRules } from "./Prettier/Prettier";
import { testESLintRules } from "./ESLint/ESLint";
import { testSonarRules } from "./Sonar/Sonar";

class RuleComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <p>RuleComponent</p>
        </div>
      </React.Fragment>
    );
  }
}

export default class TestRules extends Component {
  render() {
    testPrettierRules();
    testESLintRules();
    testSonarRules();

    return (
      <React.Fragment>
        <div>
          <h1>Test Rules</h1>
          {
            /** Prettier: jsxSingleQuote
             *  Use single quotes instead of double quotes in JSX.
             *  Default value: false
             */

            /** Prettier: jsxBracketSameLine
             *  Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
             *  Default value: false
             */

            <RuleComponent testJsxQuote="testJsxQuote" />
          }
        </div>
      </React.Fragment>
    );
  }
}

/** Prettier: rangeEnd
 *  Specify end line to format only a segment of a file.
 *  Default value: Infinity
 */
