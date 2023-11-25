/**
 * Type Assertions
 * Sometimes TypeScript is not able to infer the correct type for a value,
 * but you, as a developer, are confident about the actual type.
 *
 * In these cases, you can use type assertions to inform TypeScript of the correct type.
 */

/**
 * Type assertions have two syntaxes:
 * value as Type
 * and <Type>value.
 */
namespace ss {
  const element = document.getElementById("my-element");
  // TypeScript sees 'element' as 'HTMLElement | null'
  const myElement = element as HTMLElement;
  // Now TypeScript sees 'myElement' as 'HTMLElement'
}
//Keep in mind that type assertions can be unsafe,
//as they effectively disable the type checker.
