
const Get = async (url: string) => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
export default (Get)