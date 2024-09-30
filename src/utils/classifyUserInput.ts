export const classifyInput = (input) => {
    // Regex patterns for domain and IP address
    const domainPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const ipPattern = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

    if (domainPattern.test(input)) {
        return "Domain";
    } else if (ipPattern.test(input)) {
        return "IP Address";
    } else {
        return "Unknown";
    }
}
