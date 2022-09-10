import { useState } from "react"

const FlavorForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [gender, setGender] = useState('');
    const [tag, setTag] = useState('');

    const handleSubmit = (e) => {
        console.log(name, description, gender);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">
                    Name:
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            
            <div>
                <label htmlFor="description">
                    Description:
                </label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div>
                <label htmlFor="gender">
                    Gender:
                </label> 
                <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </div>

            <div>
                <label htmlFor="tag">
                    Tag:
                </label> 
                <select name="tag" id="tag" multiple={true} value={['TAG1', 'TAG2']} onChange={(e) => setTag([...tag, e.target.value])}>
                    <option value="">Select Gender</option>
                    <option value="TAG1">Tag 1</option>
                    <option value="TAG2">Tag 2</option>
                    <option value="TAG3">Tag 3</option>
                    <option value="TAG4">Tag 4</option>
                    <option value="TAG5">Tag 5</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default FlavorForm;