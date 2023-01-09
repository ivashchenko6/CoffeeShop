import React, { Component } from 'react';


import './search-panel.scss'
class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value.toLowerCase();
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }


    

    render() {
        const { term } = this.state;

        return (
            <div className="form_group">
                <form>
                    <label>
                        Looking for  <input 
                                        type="text" 
                                        
                                        placeholder='starting type here...' 
                                        className='input_area' 
                                        value={term}
                                        onChange={this.onUpdateSearch}/>
                    </label>
                </form>
            </div>
        );
    }
}

export default SearchPanel;
