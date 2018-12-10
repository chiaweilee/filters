module.exports = (value, fixed = 0) => isNaN(value) ? value : `${(parseFloat(value) * 100).toFixed(fixed)}%`
