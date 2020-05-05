const ERROR ={
    default: 'Произошла ошибка, зайдите позже'
}

export default function ErrorText({errorText}){
    if(!errorText){
        return null
    }
    else{
        return ERROR['default']
    }
}