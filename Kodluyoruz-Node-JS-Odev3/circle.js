const circleArea = (radius) => {
    let area= Math.round(Math.PI * (radius ** 2) * 100) / 100 
    console.log(area);
}

const circleCircumference = (radius) => {
    let circumference= Math.round(Math.PI*2*radius*100) / 100
    console.log(circumference);
}

module.exports = {
    circleArea,
    circleCircumference
}