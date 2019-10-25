import NumberType from './types/NumberType';
import StageType from './types/StageType';

export default [
    {
        id: 1,
        accepts: [NumberType.NUMBER, NumberType.EVEN, NumberType.ODD],
        type: StageType.SOURCE,
        droppedNumbers: [
            { id: 1, type: NumberType.ODD, originType: StageType.SOURCE, value: 1, originId: 1 },
            { id: 2, type: NumberType.EVEN, originType: StageType.SOURCE, value: 2, originId: 1 },
            { id: 3, type: NumberType.ODD, originType: StageType.SOURCE, value: 3, originId: 1 },
            { id: 4, type: NumberType.EVEN, originType: StageType.SOURCE, value: 4, originId: 1 },
            { id: 5, type: NumberType.ODD, originType: StageType.SOURCE, value: 5, originId: 1 },
            { id: 6, type: NumberType.EVEN, originType: StageType.SOURCE, value: 6, originId: 1 },
            { id: 7, type: NumberType.ODD, originType: StageType.SOURCE, value: 7, originId: 1 },
            { id: 8, type: NumberType.EVEN, originType: StageType.SOURCE, value: 8, originId: 1 },
            { id: 9, type: NumberType.ODD, originType: StageType.SOURCE, value: 9, originId: 1 },
            { id: 10, type: NumberType.EVEN, originType: StageType.SOURCE, value: 10, originId: 1 },
            { id: 11, type: NumberType.ODD, originType: StageType.SOURCE, value: 11, originId: 1 },
            { id: 12, type: NumberType.EVEN, originType: StageType.SOURCE, value: 12, originId: 1 }
        ]
    },
    { id: 2, accepts: [NumberType.NUMBER, NumberType.EVEN], type: StageType.TARGET, droppedNumbers: [] },
    { id: 3, accepts: [NumberType.NUMBER, NumberType.ODD], type: StageType.TARGET, droppedNumbers: [] },
];
