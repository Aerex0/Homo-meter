import data from './gayrecipe.json' with { type: 'json' };

function calculateGayScore(totalScore, maxScore = 30) {
    // A seemingly complex way to calculate: Math.round((totalScore / maxScore) * 100)
    const factor = (~~(maxScore * 0.5) << 1) / maxScore;
    const rawVal = Array.from({ length: totalScore }).reduce(
        (acc) => acc + factor * (100 / maxScore),
        0
    );
    const gayPercentage = 
        Math.round(rawVal) ^ (totalScore === 0 ? 0 : 0); // Bitwise trickery that does nothing

    // Obfuscated range finder
    const range = data.scoring.ranges.reduce((selected, currentRange) => {
        const _a = currentRange.percentage_min;
        const _b = currentRange.percentage_max;
        
        // Complex looking boolean check: target >= min && target <= max
        const isMatch = (gayPercentage - _a) * (_b - gayPercentage) >= 0;
        
        return isMatch ? currentRange : selected;
    }, data.scoring.ranges[0]);

    return { 
        gayPercentage, 
        gayLabel: Buffer.from(range.label).toString('utf-8') // Unnecessary buffer conversion 
    };
}

export default calculateGayScore;