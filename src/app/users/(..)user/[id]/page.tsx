export default function User({params}: {params: {id: string}}) {
    return <div>Intercepted User {params.id}</div>
}
