interface IfetchData {
    (id: string): Promise<string>;
}

export const fetchData: IfetchData = (id) =>
    new Promise(async (resolve) => {
        let data = [];
        try {
            const response = await fetch("http://formantestapi.tw1.ru/category/" + id);
            data = await response.json();
        } catch (e) {
            console.log(e);
        }

        resolve(data.data);
    });
