import data from './gayrecipe.json' with { type: 'json' };

function calculateGayScore(totalScore, maxScore = 30) {
    const gayPercentage = Math.round((totalScore / maxScore) * 100);

    const range = data.scoring.ranges.find((range) =>
        gayPercentage >= range.percentage_min && gayPercentage <= range.percentage_max
    );

    return { gayPercentage, gayLabel: range.label };
}

export default calculateGayScore;