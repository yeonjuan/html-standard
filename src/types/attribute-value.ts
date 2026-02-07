export type AttributeValue =
  | string // Attribute has a value: <div key="value">
  | true // Attribute exists without a value: <div key>
  | null; // Attribute does not exist: <div>
