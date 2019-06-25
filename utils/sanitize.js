// sanitize prismic object to make it usable in front
export default function({data, tags}) {
    return {
        director: data.director[0],
        title: data.title[0],
        social: data.social[0],
        video: data.video,
        type: tags[0]
    }
}