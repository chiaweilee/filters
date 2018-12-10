module.exports = (value, fixed = 0) => isNaN(value) ? value : `${(Number(value) * 100).toFixed(fixed)}%`
