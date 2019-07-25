export const testESLintRules = () => {
  /** ESLint: no-empty
   *  Nested blocks of code should not be left empty
   *
   *  Incorrect code:
   *
   *  const testNoEmpty = true;
   *  if (testNoEmpty) {
   *  }
   */

  const testNoEmpty = true;
  if (testNoEmpty) {
    console.log("testNoEmpty");
  }

  /** ESLint: no-unsafe-finally
   *  Jump statements should not occur in "finally" blocks
   *
   *  Incorrect code:
   *
   *  const testNoUnsafeFinally = function() {
   *    try {
   *      console.log("testNoUnsafeFinally");
   *      return 1;
   *    } catch(err) {
   *      console.log("testNoUnsafeFinally: " + err.getMessage());
   *      return 2;
   *    } finally {
   *      console.log("testNoUnsafeFinally: finally");
   *      return 3;
   *    }
   *  };
   *  testNoUnsafeFinally();
   */

  const testNoUnsafeFinally = function() {
    try {
      console.log("testNoUnsafeFinally");
      return 1;
    } catch (err) {
      console.log("testNoUnsafeFinally: " + err.getMessage());
      return 2;
    } finally {
      console.log("testNoUnsafeFinally: finally");
    }
  };
  testNoUnsafeFinally();

  /** ESLint: curly
   *  Jump statements should not occur in "finally" blocks
   *
   *  Incorrect code:
   *
   *  const testCurly = true;
   *  if (testCurly) console.log("testCurly");
   */

  const testCurly = true;
  if (testCurly) {
    console.log("testCurly");
  }

  /** ESLint: no-octal
   *  Octal values should not be used
   *
   *  Incorrect code:
   *
   *  const testNoOctal = 071;
   *  console.log("testNoOctal: " + testNoOctal);
   */

  const testNoOctal = "071";
  console.log("testNoOctal: " + testNoOctal);

  /** ESLint: no-with
   *  "with" statements should not be used
   *
   *  Incorrect code:
   *
   *  with (point) {
   *    testNoWith = Math.sqrt(x * x + y * y); // is testNoWith a member of point?;
   *  };
   */

  const testNoWith = ({ x, y }) => Math.sqrt(x * x + y * y);
  console.log("testNoWith: " + testNoWith({ x: 1, y: 2 }));

  /** ESLint: no-unused-vars
   *  Unused local variables and functions should be removed
   *
   *  Incorrect code:
   *
   *  const testNoUnusedVars = "noUnusedVars";
   */

  const testNoUnusedVars = "noUnusedVars";
  console.log(testNoUnusedVars);

  /** ESLint: no-debugger
   *  Debugger statements should not be used
   *
   *  Incorrect code:
   *
   *  const testNoDebugger = x => {
   *    debugger;
   *    console.log(x);
   *  };
   *  testNoDebugger("testNoDebugger");
   */

  const testNoDebugger = x => {
    console.log(x);
  };
  testNoDebugger("testNoDebugger");

  /** ESLint: no-dupe-keys
   *  Property names should not be duplicated within a class or object literal
   *
   *  Incorrect code:
   *
   *  const testNoDupeKeys = {
   *    description: "testNoDupeKeys",
   *    description: "testNoDupeKeys-id"
   *  };
   *  console.log(testNoDupeKeys.description);
   */

  const testNoDupeKeys = {
    description: "testNoDupeKeys",
    id: "testNoDupeKeys-id"
  };
  console.log(testNoDupeKeys.description);

  /** ESLint: no-dupe-args
   *  Function argument names should be unique
   *
   *  Incorrect code:
   *
   *  const testNoDupeArgs = function (a, b, a) {
   *    console.log("value of a:", a);
   *    console.log("value of b:", a);
   *    console.log("value of the second a:", a);
   *  };
   *  testNoDupeArgs();
   */

  const testNoDupeArgs = function(a, b, c) {
    console.log("testNoDupeArgs");
    console.log("value of a: " + a);
    console.log("value of b: " + b);
    console.log("value of c: " + c);
  };
  testNoDupeArgs(1, 2, 3);

  /** ESLint: strict
   *  "strict" mode should be used with caution
   *
   *  Incorrect code:
   *
   *  const testStrict = function () {
   *    "use strict";
   *    console.log("testStrict");
   *  };
   *  testStrict();
   *
   */

  //"use strict" //you don't have to add this line if you're using ECMAScript modules
  const testStrict = function() {
    console.log("testStrict");
  };
  testStrict();

  /** ESLint: no-self-assign
   *  Variables should not be self-assigned
   *
   *  Incorrect code:
   *
   *  let testNoSelfAssign = "testNoSelfAssign";
   *  testNoSelfAssign = testNoSelfAssign;
   *
   */

  let testNoSelfAssign = "testNoSelfAssign";
  console.log(testNoSelfAssign);

  /** ESLint: no-unreachable
   *  Jump statements should not be followed by dead code
   *
   *  Incorrect code:
   *
   *  const testNoUnreachable = () => {
   *      return "testNoUnreachable";
   *      console.log("testNoUnreachable");
   *  };
   *  testNoUnreachable();
   */

  const testNoUnreachable = () => {
    return printTestNoUnreachable("testNoUnreachable");
    function printTestNoUnreachable(str) {
      console.log(str);
    }
  };
  testNoUnreachable();

  /** ESLint: no-shadow-restricted-names
   *  Special identifiers should not be bound or assigned
   *
   *  Incorrect code:
   *
   *  const NaN = () => {
   *    console.log("testNoShadowRestrictedNames");
   *  };
   *  NaN();
   */

  const testNoShadowRestrictedNames = () => {
    console.log("testNoShadowRestrictedNames");
  };
  testNoShadowRestrictedNames();

  /** ESLint: for-direction
   *  A "for" loop update clause should move the counter in the right direction
   *
   *  Incorrect code:
   *
   *  for (let i = 0; i < 1; i--) {
   *  }
   */

  for (let i = 0; i < 1; i++) {
    console.log("testForDirection");
  }

  /** ESLint: use-isnan
   *  "NaN" should not be used in comparisons
   *
   *  Incorrect code:
   *
   *  const testUseIsNaN = true;
   *  if (testUseIsNaN == NaN) {
   *      console.log("testUseIsNaN");
   *  }
   */

  const testUseIsNaN = true;
  if (isNaN(testUseIsNaN)) {
    console.log("testUseIsNaN");
  }

  /** ESLint: no-useless-catch
   *  "catch" clauses should do more than rethrow
   *
   *  Incorrect code:
   *
   *  try {
   *    doSomethingThatMightThrow();
   *  } catch (e) {
   *    throw e;
   *  }
   */

  try {
    console.log("testNoUselessCatch");
  } catch (e) {
    console.log("testNoUselessCatch: " + e.getMessage());
    throw e;
  }

  /** ESLint: no-redeclare|no-func-assign
   *  Variables and functions should not be redeclared
   *
   *  Incorrect code:
   *
   *  const testNoRedeclare = "testNoRedeclare";
   *  const testNoRedeclare = "testNoRedeclare";
   *  console.log(testNoRedeclare);
   *
   *  const testNoFuncAssign = () => {
   *      console.log("testNoFuncAssign");
   *  }
   *  testNoFuncAssign = testNoRedeclare;
   *  testNoFuncAssign();
   */

  const testNoRedeclare = "testNoRedeclare";
  console.log(testNoRedeclare);

  const testNoFuncAssign = () => {
    console.log("testNoFuncAssign");
  };
  testNoFuncAssign();

  /** ESLint: no-delete-var
   *  "delete" should be used only with object properties
   *
   *  Incorrect code:
   *
   *  const testNoDeleteVar = "testNoDeleteVar";
   *  console.log(testNoDeleteVar);
   *  delete x;
   */

  const testNoDeleteVar = {
    description: "testNoDeleteVar",
    deleteMe: "here"
  };
  delete testNoDeleteVar.deleteMe;
  console.log(testNoDeleteVar.description);

  /** ESLint: no-const-assign
   *  Attempts should not be made to update "const" variables
   *
   *  Incorrect code:
   *
   *  const testNoConstAssign = "";
   *  testNoConstAssign = "testNoConstAssign";
   *  console.log(testNoConstAssign)
   */

  const testNoConstAssign = "testNoConstAssign";
  console.log(testNoConstAssign);

  /** ESLint: require-yield
   *  Generators should "yield" something
   *
   *  Incorrect code:
   *
   *  function* testRequireYield() {
   *    return 10;
   *  }
   */

  function* testRequireYield() {
    yield 5;
    return 10;
  }
  const iterator = testRequireYield();
  iterator.next();
  console.log("testRequireYield");

  /** ESLint: no-empty-pattern
   *  Destructuring patterns should not be empty
   *
   *  Incorrect code:
   *
   *  const {a: {}} = testNoEmptyPattern;
   */

  const testNoEmptyPattern = {
    testDestruct: "testNoEmptyPattern"
  };
  const { testDestruct = "" } = testNoEmptyPattern;
  console.log(testDestruct);

  /** ESLint: no-unsafe-negation
   *  Results of "in" and "instanceof" should be negated rather than operands
   *
   *  Incorrect code:
   *
   *  const testNoUnsafeNegation = {};
   *  const key = "";
   *  if (!key in object) {
   *      // operator precedence makes it equivalent to (!key) in object
   *      // and type conversion makes it equivalent to (key ? "false" : "true") in object
   *      console.log("testNoUnsafeNegation");
   *  }
   */

  const testNoUnsafeNegation = {};
  const key = "";
  if (!(key in testNoUnsafeNegation)) {
    console.log("testNoUnsafeNegation");
  }

  /** ESLint: no-undef
   *  Non-existent variables should not be referenced
   *
   *  Incorrect code:
   *
   *  let testNoUndef;
   *  testUndef = "testUndef";
   *  console.log(testUndef);
   */

  let testNoUndef;
  testNoUndef = "testNoUndef";
  console.log(testNoUndef);

  /** ESLint: no-new-symbol
   *  Symbol should not be used as a constructor
   *
   *  Incorrect code:
   *
   *  const testNoNewSymbol = new Symbol('testNoNewSymbol');
   *  console.log(testNoNewSymbol);
   */

  const testNoNewSymbol = Symbol("testNoNewSymbol");
  console.log(testNoNewSymbol.description);

  /** ESLint: constructor-super|no-this-before-super
   *  "super()" should be invoked appropriately
   *
   *  Incorrect code:
   *
   *  class testConstructorSuperClass {
   *    constructor() {
   *      super();  // This is a SyntaxError.
   *    }
   *    description() {
   *      console.log("testConstructorSuper: description");
   *    }
   *  }
   *
   *  class testNoThisBeforeSuperClass extends testConstructorSuperClass {
   *    constructor() {
   *      this.name = "testNoThisBeforeSuper";
   *      super();
   *      console.log("testNoThisBeforeSuper");
   *    }
   *  }
   */

  class testConstructorSuperClass {
    constructor() {}
    description() {
      console.log("testConstructorSuper: description");
    }
  }

  class testNoThisBeforeSuperClass extends testConstructorSuperClass {
    constructor() {
      super();
      this.name = "testNoThisBeforeSuper";
      console.log(this.name);
    }
  }

  const testConstructorSuper = new testNoThisBeforeSuperClass();
  testConstructorSuper.description();

  /** ESLint: getter-return
   *  enforce return statements in getters
   *
   *  Incorrect code:
   *
   *  const testGetterReturn = {
   *    get name(){
   *      // no returns.
   *    }
   *  };
   *  console.log(testGetterReturn.name);
   */

  const testGetterReturn = {
    get name() {
      return "testGetterReturn";
    }
  };
  console.log(testGetterReturn.name);

  /** ESLint: no-async-promise-executor
   *  disallow using an async function as a Promise executor
   *
   *  Incorrect code:
   *
   *  const foo = new Promise(async resolve => {
   *    resolve()
   *  });

   *  const result = new Promise(async resolve => {
   *    resolve(await foo);
   *  });
   */

  const testNoAsyncPromiseExecutor = new Promise(resolve => {
    resolve();
  });

  Promise.resolve(testNoAsyncPromiseExecutor).then(r => r);
  console.log("testNoAsyncPromiseExecutor");

  /** ESLint: no-compare-neg-zero
   *  disallow comparing against -0
   *
   *  Incorrect code:
   *
   *  const testNoCompareNegZero = 0;
   *  if (testNoCompareNegZero === -0) {
   *    console.log("testNoCompareNegZero);
   *  }
   */

  const testNoCompareNegZero = 0;
  if (testNoCompareNegZero === 0) {
    console.log("testNoCompareNegZero");
  }

  /** ESLint: no-cond-assign
   *  disallow assignment operators in conditional expressions
   *
   *  Incorrect code:
   *
   *  const testNoCondAssign;
   *  if (testNoCondAssign = "testNoCondAssign") {
   *    console.log(testNoCondAssign)
   *  }
   */

  const testNoCondAssign = "";
  if (testNoCondAssign.length === 0) {
    console.log("testNoCondAssign");
  }

  /** ESLint: no-constant-condition
   *  disallow constant expressions in conditions
   *
   *  Incorrect code:
   *
   *  const testNoConstantCondition = "testNoConstantCondition"
   *  if(true){
   *    console.log(testNoConstantCondition)
   *  }
   */

  const testNoConstantCondition = "testNoConstantCondition";
  if (testNoConstantCondition.length > 0) {
    console.log(testNoConstantCondition);
  }

  /** ESLint: no-control-regex
   *  disallow control characters in regular expressions
   *
   *  Incorrect code:
   *
   *  const testNoControlRegex = /\x1f/;
   */

  const testNoControlRegex = /\x20/;
  if (!testNoControlRegex.test("testNoControlRegex")) {
    console.log("testNoControlRegex");
  }

  /** ESLint: no-duplicate-case
   *  disallow duplicate case labels
   *
   *  Incorrect code:
   *
   *  const testNoDuplicateCase = 1;
   *
   *  switch (testNoDuplicateCase) {
   *    case 1:
   *      console.log("testNoDuplicateCase")
   *      break;
   *    case 2:
   *      break;
   *    case 1:         // duplicate test expression
   *      break;
   *    default:
   *      break;
   *  }
   */

  const testNoDuplicateCase = 1;

  switch (testNoDuplicateCase) {
    case 1:
      console.log("testNoDuplicateCase");
      break;
    case 2:
      break;
    default:
      break;
  }

  /** ESLint: no-empty-character-class
   *  disallow empty character classes in regular expressions
   *
   *  Incorrect code:
   *
   *  "abcdefg".match(/^abc[]/); // null
   */

  if ("abcdefg".match(/^abc/).length > 0) {
    console.log("testNoEmptyCharacterClass");
  }

  /** ESLint: no-ex-assign
   *  disallow reassigning exceptions in catch clauses
   *
   *  Incorrect code:
   *
   *  try {
          console.log("testNoExAssign");
      } catch (e) {
          e = 10;
      }
   */

  try {
    console.log("testNoExAssign");
  } catch (e) {
    console.log(e.getMessage());
  }

  /** ESLint: no-extra-boolean-cast
   *  disallow unnecessary boolean casts
   *
   *  Incorrect code:
   *
   *  const testNoExtraBooleanCast = true;
   *  if(Boolean(testNoExtraBooleanCast)) {
   *    console.log("testNoExtraBooleanCast")
   *  }
   */

  const testNoExtraBooleanCast = true;
  if (testNoExtraBooleanCast) {
    console.log("testNoExtraBooleanCast");
  }

  /** ESLint: no-inner-declarations
   *  disallow variable or function declarations in nested blocks
   *
   *  Incorrect code:
   *
   *  const testNoInnerDeclarations = true;
   *  if (testNoInnerDeclarations) {
   *    function printSomething() {
   *      console.log("testNoInnerDeclarations");
   *    }
   *  }
   */

  const testNoInnerDeclarations = true;
  if (testNoInnerDeclarations) {
    const fn = function printSomething() {
      console.log("testNoInnerDeclarations");
    };
    fn();
  }

  /** ESLint: no-invalid-regexp
   *  disallow invalid regular expression strings in RegExp constructor
   *
   *  Incorrect code:
   *
   *  const testNoInvalidRegexp = RegExp('\');
   *  if(testNoInvalidRegexp.match("\testNoInvalidRegexp").length > 0){
   *    console.log("testNoInvalidRegexp")
   *  }
   */

  const testNoInvalidRegexp = /^\\$/;
  if (testNoInvalidRegexp.exec("\\").length > 0) {
    console.log("testNoInvalidRegexp");
  }

  /** ESLint: no-irregular-whitespace
   *  disallow irregular whitespace
   *
   *  Incorrect code:
   *
   *  const testNoIrregularWhitespace = function thing( ) {
   *    return / <NBSP>regexp/;
   *  }
   *
   */

  const testNoIrregularWhitespace = function thing() {
    console.log("testNoIrregularWhitespace");
  };
  testNoIrregularWhitespace();

  /** ESlint: no-misleading-character-class
   *  disallow characters which are made with multiple code points in character class syntax
   *
   *  Incorrect code:
   *
   *  const testNoMisleadingCharacterClass = /^[👍]$/
   *
   */

  const testNoMisleadingCharacterClass = /^[👍]$/u;
  if (!"".match(testNoMisleadingCharacterClass)) {
    console.log("testNoMisleadingCharacterClass");
  }

  /** ESLint: no-obj-calls
   *  disallow calling global object properties as functions
   *
   *  Incorrect code:
   *
   *  const testNoObjCalls = JSON();
   *
   */

  const testNoObjCalls = JSON.parse("{}");
  if (testNoObjCalls) {
    console.log("testNoObjCalls");
  }

  /** ESLint: no-prototype-builtins
   *  disallow calling some Object.prototype methods directly on objects
   *
   *  Incorrect code:
   *
   *  const testNoPrototypeBuiltins = {
   *    description: "testNoPrototypeBuiltins"
   *  }
   *  const desc = testNoPrototypeBuiltins.description
   *  if(desc.isPrototypeOf(testNoPrototypeBuiltins)) {
   *    console.log("testNoPrototypeBuiltins")
   *  }
   */

  const testNoPrototypeBuiltins = {
    description: "testNoPrototypeBuiltins"
  };
  const desc = testNoPrototypeBuiltins.description;
  if (!Object.prototype.isPrototypeOf.call(desc, testNoPrototypeBuiltins)) {
    console.log("testNoPrototypeBuiltins");
  }

  /** ESLint: no-regex-spaces
   *  disallow multiple spaces in regular expressions
   *
   *  Incorrect code:
   *
   *  const testNoRegexSpaces = new RegExp("no   spaces");
   *  if(testNoRegexSpaces.test("no   spaces")){
   *    console.log("testNoRegexSpaces")
   *  }
   */

  const testNoRegexSpaces = new RegExp("no {3}spaces");
  if (testNoRegexSpaces.test("no   spaces")) {
    console.log("testNoRegexSpaces");
  }

  /** ESLint: no-sparse-arrays
   *  disallow sparse arrays
   *
   *  Incorrect code:
   *
   *  const testNoSparseArrays = [ "red",, "blue" ];
   */

  const testNoSparseArrays = [
    "red",
    "blue" /* adding a comma after last element is not a problem */
  ]; //Prettier will automatically remove this extra comma when you will save this file

  if (testNoSparseArrays.length > 1) {
    console.log("testNoSparseArrays");
  }

  /** ESLint: no-unexpected-multiline
   *  disallow confusing multiline expressions
   *
   *  Incorrect code:
   *
   *  const testNoUnexpectedMultiline = function() {}
   *  testNoUnexpectedMultiline
   *  console.log("testNoUnexpectedMultiline");
   */

  const testNoUnexpectedMultiline = function() {};
  testNoUnexpectedMultiline();
  console.log("testNoUnexpectedMultiline");

  /** ESLint: require-atomic-updates
   *  disallow assignments that can lead to race conditions due to usage of await or yield
   *
   *  Incorrect code:
   *
   *  let result;
   *  function* bar() {
   *    result += yield;
   *
   *    result = result + (yield somethingElse);
   *
   *    result = result + doSomething(yield somethingElse);
   *  }
   */

  //TODO: require-atomic-updates

  /** ESLint: valid-typeof
   *  enforce comparing typeof expressions against valid strings
   *
   *  Incorrect code:
   *
   *  const testValidTypeOf = "testValidTypeOf"
   *  if(typeof testValidTypeOf === "strnig"){
   *    console.log(testValidTypeOf);
   *  }
   */

  const testValidTypeOf = "testValidTypeOf";
  if (typeof testValidTypeOf === "string") {
    console.log(testValidTypeOf);
  }

  /** ESLint: no-case-declarations
   *  disallow lexical declarations in case clauses
   *
   *  Incorrect code:
   *
   *  const testNoCaseDeclarations = 1;
   *  switch (testNoCaseDeclarations) {
   *      case 1:
   *          let x = 1;
   *          console.log("testNoCaseDeclarations");
   *          break;
   *      case 2:
   *          const y = 2;
   *          break;
   *      case 3:
   *          function f() {}
   *          break;
   *      default:
   *          class C {}
   *  }
   */

  const testNoCaseDeclaration = 4;
  switch (testNoCaseDeclaration) {
    case 1: {
      let x = 1;
      console.log(x);
      break;
    }
    case 2: {
      const y = 2;
      console.log(y);
      break;
    }
    case 3:
      // Declarations using var without brackets are valid due to function-scope hoisting
      var z = 4;
      console.log(z);
      break;
    case 4: {
      const f = function f() {
        console.log("testNoCaseDeclaration");
      };
      f();
      break;
    }
    default: {
      class C {}
      const c = C();
      console.log(c);
    }
  }

  /** ESLint: no-fallthrough
   *  disallow fallthrough of case statements
   *
   *  Incorrect code:
   *
   *  const testNoFallthrough = 1;
   *  switch(testNoFallthrough) {
   *    case 1:
   *      doSomething();
   *    case 2:
   *      doSomething();
   *  }
   */

  const testNoFallthrough = 1;
  switch (testNoFallthrough) {
    case 1:
      console.log("testNoFallthrough");
      break;
    case 2:
      console.log("testNoFallthrough");
  }

  /** ESLint: no-global-assign
   *  disallow assignments to native objects or read-only global variables
   *
   *  Incorrect code:
   *
   *  Object = null
   *  undefined = 1
   */

  const testNoGlobalAssign = null;
  if (!testNoGlobalAssign) {
    console.log("testNoGlobalAssign");
  }

  /** ESLint: no-unused-labels
   *  disallow unused labels
   *
   *  Incorrect code:
   *
   *  A: var foo = 0;
   *  B: {
   *    foo();
   *  }
   *
   *  C:
   *  for (let i = 0; i < 10; ++i) {
   *    foo();
   *  }
   */

  const testNoUnusedLabel = 0;

  B: for (let i = 0; i < 10; i++) {
    if (testNoUnusedLabel === 0) {
      console.log("testNoUnusedLabel");
      break B;
    }
  }

  /** ESLint: no-useless-escape
   *  disallow unnecessary escape characters
   *
   *  Incorrect code:
   *
   *  const testNoUselessEscape = "\'";
   *  const testNoUselessEscape = '\"';
   *  const testNoUselessEscape = "\#";
   *  const testNoUselessEscape = "\e";
   */

  const testNoUselessEscape = "'";
  if (testNoUselessEscape === "'") {
    console.log("testNoUselessEscape");
  }

  /** ESLint: no-mixed-spaces-and-tabs
   *  disallow mixed spaces and tabs for indentation
   *
   *  Incorrect code:
   *
   *  let testNoMixedSpacesAndTabs = 0;
   *  if(testNoMixedSpacesAndTabs === 0) {
   *      testNoMixedSpacesAndTabs = "testNoMixedSpacesAndTabs";
   *    console.log(testNoMixedSpacesAndTabs);
   *  }
   */

  let testNoMixedSpacesAndTabs = 0;
  if (testNoMixedSpacesAndTabs === 0) {
    testNoMixedSpacesAndTabs = "testNoMixedSpacesAndTabs";
    console.log(testNoMixedSpacesAndTabs);
  }

  /** ESLint: no-class-assign
   *  disallow reassigning class members
   *
   *  Incorrect code:
   *
   *  class TestNoClassAssign { }
   *  TestNoClassAssign = 0;
   */

  let testNoClassAssign = class TestNoClassAssign {};
  testNoClassAssign = "testNoClassAssign";
  if (testNoClassAssign === "testNoClassAssign") {
    console.log(testNoClassAssign);
  }

  /** ESLint: no-dupe-class-members
   *  disallow duplicate class members
   *
   *  Incorrect code:
   *
   *  class TestNoDupeClassMembers {
   *    bar() { }
   *    bar() { }
   *  }
   */

  class TestNoDupeClassMembers {
    bar() {}
    print() {
      console.log("testNoDupeClassMembers");
    }
  }
  const testNoDupeClassMembers = new TestNoDupeClassMembers();
  testNoDupeClassMembers.print();
};
