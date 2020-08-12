import React, {useState, useEffect} from 'react';
const Pgmsearch = ({text, setView}) =>{
	const [term, srterm] = useState('');
	const showpublished = (e) =>{
		e.preventDefault();
		setView(2);
	}
	useEffect(()=>{
		const timerid = setTimeout(()=>{
			text(term)
		}, 100)
		return(()=>{clearTimeout(timerid)})
	},[term])
 	return (<div>
				<form className="container ui form center aligned">
					<div className="ui right labeled input">
				<form className="ui container form center aligned">
					<div className="ui right labeled input" style={{marginRight:'100px'}}>
						<div className="ui basic label" onClick={(e)=>{showpublished(e)}}><i aria-hidden="true" className="search icon"></i></div>
							<input 
									type="text" 
									placeholder="Search hare"
									value={term}
									onChange={e=>srterm(e.target.value)}/>
						<div className="ui label" onClick={(e)=>srterm('')}><i aria-hidden="true" className="cancel icon"></i></div>
					</div>
				</form>
			</div>);
};
export default Pgmsearch;