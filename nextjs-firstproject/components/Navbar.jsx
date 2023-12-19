const { default: Link } = require("next/link");

function Navbar() {
    return (
        <nav>
            <Link>
                Home
            </Link>

            <ul>
                <li>
                    <Link>
                        Users
                    </Link>
                </li>
            </ul>        
        </nav>    
    )
}