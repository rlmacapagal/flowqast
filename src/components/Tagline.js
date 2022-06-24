import tag from "./../assets/brand.png";
export function Tagline() {
    return (
        <div className="tagline">
            <img className="tag-image" src={tag} alt="..." /> The
            <br />
            <span className="green">Fastest, Most Accurate</span>
            <br />
            Way to close your Books!
        </div>
    );
}
