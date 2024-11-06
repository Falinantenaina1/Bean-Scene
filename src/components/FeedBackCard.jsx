import Apostroph from "../assets/apostroph.png"
function FeedbackCard ({author, job, profil, children}) {
    
    return <div className="card card-feedback">
        <p>{children}</p>
        <h3 className="author">{author}</h3>
        <span className="job">{job}</span>
        <img src={profil} alt={author} className="author-profil" />
        <img className="apostroph" src={Apostroph} alt="apostroph" />
    </div>
}

export default FeedbackCard;