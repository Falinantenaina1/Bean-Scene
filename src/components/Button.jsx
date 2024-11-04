function Button ({href, children}) {
    if (href) {
        return <a href={href} className="btn">{children}</a>
    }
    return <button className="btn">{children}</button>
}

export default Button;