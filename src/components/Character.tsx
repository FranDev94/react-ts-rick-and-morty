import { Image } from "react-bootstrap";

type CharacterProps = ICharacter

export default function Character({ name, image, origin }: CharacterProps) {
    return <>
        <div className="">
            <h3>{name}</h3>
            <div style={{ width: "150px", height: "150px" }}>
                <Image fluid roundedCircle src={image} />
            </div>
            <p>{origin.name}</p>
        </div>
    </>
}