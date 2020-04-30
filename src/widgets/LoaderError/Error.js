const ERROR ={
    default: 'Произошла ошибка, зайдите позже'
}

export default function ErrorText({errorText}){
    if(!errorText){
        return null
    }
    if(ERROR.hasOwnProperty(errorText)){
        return ERROR[errorText]
    }
    else{
        return ERROR['default']
    }
}