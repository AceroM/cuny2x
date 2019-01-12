module.exports = (set1, set2) => set2.filter(i => !set1.includes(i)).concat(set1.filter(j => !set2.includes(j)));
