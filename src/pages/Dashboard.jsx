import React from "react";

const Dashboard = () => {
    return (
        <div>
            <>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal1"
                    data-bs-whatever="@mdo"
                >

                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                    data-bs-whatever="@fat"
                >

                </button>
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal3"
                    data-bs-whatever="@getbootstrap"
                >

                </button>
                <div
                    className="modal fade"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">
                                    Todo List
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">
                                            Search:
                                        </label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="select">
                                        <select name="todos" className="filter-todo">
                                            <option value="all">All</option>
                                            <option value="completed">completed</option>
                                            <option value="uncompleted">Uncompleted</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="col-form-label">
                                            Text:
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="message-text"
                                            defaultValue={""}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Xóa
                                </button>
                                <button type="button" className="btn btn-primary">
                                    Sửa
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};
export default Dashboard;