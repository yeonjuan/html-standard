import {
  AutocompleteAttribute,
  BCP47,
  BooleanAttribute,
  CommaSeparatedTokens,
  CSSColor,
  DateString,
  EnumeratedAttribute,
  FloatingPointNumber,
  FloatingPointNumberList,
  HashNameReference,
  ID,
  MediaQueryList,
  MIMEType,
  NavigableTargetName,
  NonNegativeInteger,
  OrValidator,
  RegularExpression,
  SignedInteger,
  SourceSizeList,
  SpaceSeparatedTokens,
  SrcsetAttribute,
  Text,
  ValidURL,
  type AnyAttribute,
} from "./validators/index.js";
import * as types from "../types/index.js";

export function createAttributeSpec(
  key: string,
  def: AnyAttribute,
): types.AttributeSpec {
  switch (def.type) {
    case SpaceSeparatedTokens.type: {
      return new SpaceSeparatedTokens(def.options);
    }
    case EnumeratedAttribute.type: {
      return new EnumeratedAttribute(def.options);
    }
    case BooleanAttribute.type: {
      return new BooleanAttribute(key);
    }
    case SignedInteger.type: {
      return new SignedInteger();
    }
    case Text.type: {
      return new Text();
    }
    case ValidURL.type: {
      return new ValidURL();
    }
    case NonNegativeInteger.type: {
      return new NonNegativeInteger(def.options);
    }
    case ID.type: {
      return new ID();
    }
    case FloatingPointNumber.type: {
      return new FloatingPointNumber();
    }
    case CommaSeparatedTokens.type: {
      return new CommaSeparatedTokens();
    }
    case CSSColor.type: {
      return new CSSColor();
    }
    case BCP47.type: {
      return new BCP47();
    }
    case MIMEType.type: {
      return new MIMEType();
    }
    case DateString.type: {
      return new DateString();
    }
    case RegularExpression.type: {
      return new RegularExpression();
    }
    case HashNameReference.type: {
      return new HashNameReference();
    }
    case NavigableTargetName.type: {
      return new NavigableTargetName();
    }
    case SrcsetAttribute.type: {
      return new SrcsetAttribute();
    }
    case MediaQueryList.type: {
      return new MediaQueryList();
    }
    case SourceSizeList.type: {
      return new SourceSizeList();
    }
    case FloatingPointNumberList.type: {
      return new FloatingPointNumberList();
    }
    case OrValidator.type: {
      return new OrValidator({ items: def.items });
    }
    case AutocompleteAttribute.type: {
      return new AutocompleteAttribute();
    }
  }
}
