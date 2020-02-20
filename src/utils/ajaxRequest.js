export const ajaxRequest = (url) => (
    fetch(
            url,
            { method: 'GET' }
        )
            .then( responseText => responseText.json() )
            .then( responseParsed => responseParsed )
            .catch( error => error )
);
