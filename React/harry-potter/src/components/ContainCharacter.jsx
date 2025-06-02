import Character from "./Character"

export default function ContainCharacter({allCharacter}) {
  return (
    <div>
      {
        allCharacter.length == 0 ? <h1>Loading</h1> : allCharacter.map(c => <Character
          key={c.id}
          id={c.id}
          actor={c.attributes.name}
        />)
      }
    </div>
  )
}
