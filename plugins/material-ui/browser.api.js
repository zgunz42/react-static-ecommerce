import wrapRoot from "./Root";

export default pluginOptions => ({
  Root: PreviewRoot => wrapRoot(PreviewRoot),
})
