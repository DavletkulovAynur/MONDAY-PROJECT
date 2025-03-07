const people = [
    {
        name: 'Alex',
        city: 'Moscow',
    },
    {
        name: 'Ivan',
        city: 'Moscow',
    },
    {
        name: 'Joe',
        city: 'New York',
    },
    {
        name: 'Johan',
        city: 'Berlin',
    },
];

interface IPeople {
    name: string;
    city: string;
}
interface IParams {
    people: IPeople[];
}

interface IGroup {
    [key: string]: string[];
}

//TYPE может описывает сигнатуру функции
type SuperFn = ({ people }: IParams) => IGroup;

const groupByCity: SuperFn = ({ people }) => {
    const group: IGroup = {};

    for (const { name, city } of people) {
        if (!Object.hasOwn(group, city)) {
            group[city] = [];
        }
        group[city].push(name);
    }

    return group;
};

groupByCity({ people });
