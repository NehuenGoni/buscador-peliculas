const APIurl = "https://api.themoviedb.org/3"

export function get(path){
    return fetch(APIurl + path, {
            headers:{
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDExYmE4YjI5MGZmNWY4MjBjNTAyOTRkMzJjYzE4ZiIsInN1YiI6IjYyYjI4Y2RhODEzY2I2MDA5MTdkMTMzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.e65PvM01F8-uZ10cnwtSntydqo2hLbt7X7z8sBAcb5w",
                "Content-Type": "application/json;charset=utf-8",
            },
        })  .then(result => result.json())
}