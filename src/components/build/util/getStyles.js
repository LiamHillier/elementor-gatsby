export const getRowStyles = props => {
  const style = {}

  if (props.margin) {
    const margin = [props.margin]
    margin.forEach(set => {
      if (set.top !== 0) {
        style['marginTop'] = `${set.top + set.unit}`
      }
      if (set.bottom !== 0) {
        style['marginBottom'] = `${set.bottom + set.unit}`
      }
    })
  }

  if (props.content_width) {
    style['maxWidth'] = `${props.content_width.size + props.content_width.unit}`
  }

  return style

}

export const getVertPos = props => {
  let position = 'flex-start'
  if (props === 'top') {
    position = 'flex-start'
  } else if (props === 'bottom') {
    position = 'flex-end'
  } else if (props === 'center') {
    position = 'center'
  } else {
    position = 'flex-start'
  }
  return position
}

export const getColStyles = props => {
  const newStyles = {}

  const settings = [props]
  settings.forEach(setting => {
    if (setting.background_color) {
      newStyles['backgroundColor'] = setting.background_color
    }
    if (setting.border_border) {
      newStyles['border'] = `${setting.border_width.top +
        setting.border_width.unit +
        ' ' +
        setting.border_width.right +
        setting.border_width.unit +
        ' ' +
        setting.border_width.bottom +
        setting.border_width.unit +
        ' ' +
        setting.border_width.left +
        setting.border_width.unit +
        ' ' +
        setting.border_border +
        ' ' +
        setting.border_color}`
    }
    if (setting.box_shadow_box_shadow_type) {
      newStyles['boxShadow'] = `${setting.box_shadow_box_shadow.horizontal +
        'px ' +
        setting.box_shadow_box_shadow.vertical +
        'px ' +
        setting.box_shadow_box_shadow.blur +
        'px ' +
        setting.box_shadow_box_shadow.spread +
        'px ' +
        setting.box_shadow_box_shadow.color}`
    }
    if (setting.border_radius) {
      newStyles['borderRadius'] = `${setting.border_radius.top +
        setting.border_radius.unit +
        ' ' +
        setting.border_radius.right +
        setting.border_radius.unit +
        ' ' +
        setting.border_radius.bottom +
        setting.border_radius.unit +
        ' ' +
        setting.border_radius.left +
        setting.border_radius.unit}`
    }
    if (setting.margin) {
      newStyles['marign'] = `${setting.margin.top +
        setting.margin.unit +
        ' ' +
        setting.margin.right +
        setting.margin.unit +
        ' ' +
        setting.margin.bottom +
        setting.margin.unit +
        ' ' +
        setting.margin.left +
        setting.margin.unit}`
    }
    if (setting.padding) {
      newStyles['padding'] = `${setting.padding.top +
        setting.padding.unit +
        ' ' +
        setting.padding.right +
        setting.padding.unit +
        ' ' +
        setting.padding.bottom +
        setting.padding.unit +
        ' ' +
        setting.padding.left +
        setting.padding.unit}`
    }
  })

  return newStyles
}
