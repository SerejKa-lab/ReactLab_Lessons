export const required = value => {
    return value && value.length !== 0 ? undefined : 'Field is required'
}

export const maxLength = maxLength => value => {
    return value && value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined
}