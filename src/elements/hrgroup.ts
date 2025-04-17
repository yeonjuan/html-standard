import { ElementSpec, GetElementSpec } from "../types";
import { contentAttributes, contentsPreset, contents } from "../helpers";

const hrgroupSpec: ElementSpec = {
  contents: [
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "zeroOrMore",
      contents: contents.fromKeys("p"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "required",
      contents: contents.fromKeys("h1", "h2", "h3", "h4", "h5", "h6"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
    {
      type: "zeroOrMore",
      contents: contents.fromKeys("p"),
    },
    {
      type: "zeroOrMore",
      contents: contentsPreset.scriptSupportingElements,
    },
  ],
  attributes: contentAttributes(true),
};

export const hrgroup: GetElementSpec = () => hrgroupSpec;
