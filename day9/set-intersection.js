module.exports = (set1, set2) => Array.from(new Set(set1.concat(set2))).filter(k => set1.includes(k) && set2.includes(k))
