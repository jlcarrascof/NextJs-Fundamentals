import Users from "../components/Users.jsx"

export const metadata = {
    title: "My Special Home Page",
} 

export default function HomePage() {
    //* server component
    return <section>
        <h1>Hello World</h1>
        {/* client component */}
        <Users />
    </section>
}
