// 1) створити інтерфейс на основі цього объекта:
// Зверніть увагу там де масиви... в них може бути багато однотипних обїектів
interface IProperty {
    mission_name: string;
    launch_date_local: string;
    launch_site: {
        "site_name_long": string;
    };
    links: {
        article_link: string,
        video_link: string
    };
    rocket: IRocket;
}

interface IRocket {
    rocket_name: string;
    first_stage: {
        cores: ICore[]
    },
    second_stage: {
        payloads: IPayloads[]
    }
}

interface ICore {
    flight: number,
    core: {
        reuse_count: number,
        status: string
    }
}

interface IPayloads {
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
}


const property: IProperty = {
    mission_name: "Starlink-15 (v1.0)",
    launch_date_local: "2020-10-24T11:31:00-04:00",
    launch_site: {
        site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    links: {
        article_link: "http://some.com",
        video_link: 'https://youtu/J442-ti-Dhg'
    },
    rocket: {
        rocket_name: "Falcon 9",
        first_stage: {
            cores: [
                {
                    flight: 7,
                    core: {
                        reuse_count: 6,
                        status: 'unknown'
                    }
                }
            ]
        },
        second_stage: {
            payloads: [
                {
                    payload_type: 'Satellite',
                    payload_mass_kg: 15400,
                    payload_mass_lbs: 33951.2
                }
            ]
        }
    }
}

console.dir(property, { depth: 50 });

//---------------------------------------------------------------------------—————————
// 2) протипізувати функції:

interface IUser {
    name: string,
    age: number,
    gender: string
}

const user: IUser = {
    name: "Max",
    age: 18,
    gender: 'male'
}

const sum = (a: number, b: number): number => {
    return a + b;
}

const showSum = (a: number, b: number): void => {
    console.log(a + b);
}

const incAge = (someUser: IUser, inc: number): IUser => {
    someUser.age += inc;
    return someUser;
}

console.log(sum(1, 2));
showSum(2,3);
console.log(incAge(user, 2));