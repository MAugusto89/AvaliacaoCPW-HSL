// Alias abreviador baseado no jQuery
const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)
const onChangeRangesRGBA = () => {
    const red = $('#red').value
    const green = $('#green').value
    const blue = $('#blue').value
    const alpha = $('#alpha').value

    $(
        '#color-display-rgba'
    ).style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
}


$all('#color-ranges-rgba input[type=range]').forEach((range) => (range.oninput = onChangeRangesRGBA));

/*HSL*/
const h = $('#h')
const s = $('#s')
const l = $('#l')
const colorDisplay = $('#color-display-hsl')
const onChangeRangesHSL = () => {
    const hue = h.value
    const saturation = s.value
    const lightness = l.value
    $(
        '#color-display-hsl'
    ).style.backgroundColor = "hsl("+ hue + "," + saturation + "%," + lightness+"%)";
}


$all('#color-ranges-hsl input[type=range]').forEach((range) => (range.oninput = onChangeRangesHSL));
onChangeRangesHSL();