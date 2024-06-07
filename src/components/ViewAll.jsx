import React from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    return (

        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sl.No</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Published Year</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Diary Of A Wimpy Kid</td>
                                    <td>Jeff Kinney</td>
                                    <td>2008</td>
                                    <td>Rs.299</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Diary Of A Wimpy Kid</td>
                                    <td>Jeff Kinney</td>
                                    <td>2008</td>
                                    <td>Rs.299</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Diary Of A Wimpy Kid</td>
                                    <td>Jeff Kinney</td>
                                    <td>2008</td>
                                    <td>Rs.299</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll