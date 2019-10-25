import NumberType from './types/NumberType';
import StageType from './types/StageType';

export default [
    {
        id: 1,
        accepts: [NumberType.NUMBER, NumberType.EVEN, NumberType.ODD],
        type: StageType.SOURCE,
        droppedNumbers: [
            { id: 1, type: NumberType.ODD, originType: StageType.SOURCE, value: 1 },
            { id: 2, type: NumberType.EVEN, originType: StageType.SOURCE, value: 2 },
            { id: 3, type: NumberType.ODD, originType: StageType.SOURCE, value: 3 },
            { id: 4, type: NumberType.EVEN, originType: StageType.SOURCE, value: 4 },
            { id: 5, type: NumberType.ODD, originType: StageType.SOURCE, value: 5 },
            { id: 6, type: NumberType.EVEN, originType: StageType.SOURCE, value: 6 },
            { id: 7, type: NumberType.ODD, originType: StageType.SOURCE, value: 7 },
            { id: 8, type: NumberType.EVEN, originType: StageType.SOURCE, value: 8 },
            { id: 9, type: NumberType.ODD, originType: StageType.SOURCE, value: 9 },
            { id: 10, type: NumberType.EVEN, originType: StageType.SOURCE, value: 10 },
            { id: 11, type: NumberType.ODD, originType: StageType.SOURCE, value: 11 },
            { id: 12, type: NumberType.EVEN, originType: StageType.SOURCE, value: 12 }
        ]
    },
    { id: 2, accepts: [NumberType.NUMBER, NumberType.EVEN], type: StageType.TARGET, droppedNumbers: [] },
    { id: 3, accepts: [NumberType.NUMBER, NumberType.ODD], type: StageType.TARGET, droppedNumbers: [] },
];
