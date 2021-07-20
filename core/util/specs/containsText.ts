export async function containsText(spec, componentId, text) {
  const component = await spec.findComponent(componentId);
  if (Array.isArray(component.props.children)) {
    if (!component.props.children.join('').includes(text)) {
      throw new Error(`Could not find text ${text}`);
    }
  } else if (!component.props.children.includes(text)) {
    throw new Error(`Could not find text ${text}`);
  }
}
