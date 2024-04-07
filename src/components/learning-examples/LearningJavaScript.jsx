const person = {
    name:'Avinash Pauskar',
    address:{
        line:'Bauxite Road',
        city:'Belgaum',
        state:'Karnataka'
    },
    profiles:['instagram','linkedIn','x'],
    printProfiles:() =>{
        console.log(person.profiles)
    }
}

export default function LerningJavaScript(){
    return(
        <div>
            <div>{person.name}</div>
            <div>{person.address.city}</div>
            <div>{person.address.line}</div>
            <div>{person.address.state}</div>
            <div>{person.profiles[1]}</div>
            <div>{ person.printProfiles() }</div>
        </div>
        
    )
}