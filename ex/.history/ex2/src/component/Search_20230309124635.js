import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
        <div className="searchForm">
  <div className="form-group">
    <div className="btn-group">
      <input type="text" className="form-control" name id placeholder="Nhập từ khóa" style={{width: 800}} />
      <div className="btn btn-info">Tìm</div>
    </div>
  </div>
</div>

    )
  }
}
