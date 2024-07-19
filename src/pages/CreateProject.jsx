import React, { useState } from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import axios from "axios";

function CreateProject() {
    const [sidebarToggle] = useOutletContext();
    const [images, setImages] = useState([]);
    const [landArea, setLandArea] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const [costConstruction, setCostConstruction] = useState()
    const [location, setLocation] = useState()
    const [totalArea, setTotalArea] = useState()
    const [typeConstruction, setTypeConstruction] = useState()
    const [year, setYear] = useState()
    const [types, setTypes] = useState()
    const handleCreateXdndProject = async () => {
        try {
            // Tạo một đối tượng FormData
            const formData = new FormData();

            formData.append('landArea', landArea);
            formData.append('title', title);
            formData.append('description', description);

            formData.append('costConstruction', costConstruction);
            formData.append('location', location);
            formData.append('totalArea', totalArea);
            formData.append('typeConstruction', typeConstruction);
            formData.append('year', year);
            formData.append('type', types);
            for (let i = 0; i < images.length; i++) {
                console.log(images)
                formData.append('img', images[i].file);
            }
            // Thêm ảnh vào FormData nếu có

            // Thực hiện request POST tới API
            const response = await axios.post('https://f-home-be.vercel.app/createXdndProject', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Đặt header 'Content-Type' là 'multipart/form-data' cho FormData
                }
            });

            // Xử lý kết quả từ API nếu cần
            console.log(response.data);
            alert('Dự án đã được tạo thành công!');
        } catch (error) {
            // Xử lý lỗi nếu request thất bại
            console.error('Error creating project:', error);
            alert('Đã xảy ra lỗi khi tạo dự án.', error?.message);
        }
    };


    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = files.map((file) => ({
            id: URL.createObjectURL(file),
            file: file,
        }));
        setImages((prevImages) => [...prevImages, ...newImages]);
    };
    const handleRemoveImage = (id) => {
        setImages(images.filter((image) => image.id !== id));
    };




    return (
        <>
            <main className="h-full">
                <Navbar toggle={sidebarToggle} />

                {/* Main Content */}
                <div className="mainCard">
                    <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
                        <div className="flex flex-col gap-4">
                            {/* Form Default */}
                            <div>
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Tiêu đề
                                </label>
                                <input
                                    id="defaultInput"
                                    type="text"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>  <div>
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Nội dung
                                </label>
                                <input
                                    id="defaultInput"
                                    type="text"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Diện tích đất
                                </label>
                                <input
                                    id="defaultInput"
                                    type="text"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                    onChange={(e) => setLandArea(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Chi phí thi công
                                </label>
                                <input
                                    id="defaultInput"
                                    type="text"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                    onChange={(e) => setCostConstruction(e.target.value)}

                                />
                            </div>    <div>
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Địa điểm
                                </label>
                                <input
                                    id="defaultInput"
                                    type="text"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                    onChange={(e) => setLocation(e.target.value)}

                                />
                            </div>    <div>
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Tổng diện tích sàn
                                </label>
                                <input
                                    id="defaultInput"
                                    type="text"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                    onChange={(e) => setTotalArea(e.target.value)}

                                />
                            </div>    <div>
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Loại công trình
                                </label>
                                <input
                                    id="defaultInput"
                                    type="text"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                    onChange={(e) => setTypeConstruction(e.target.value)}

                                />
                            </div>    <div>
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Năm thiết kế
                                </label>
                                <input
                                    id="defaultInput"
                                    type="text"
                                    name="defaultInput"
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                                    placeholder="Default Input"
                                    onChange={(e) => setYear(e.target.value)}

                                />
                            </div>
                            <div class="">
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Loại dự án
                                </label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={types}
                                    onChange={(e) => setTypes(e.target.value)}
                                >
                                    <option value="" selected>Chọn loại dự án</option>
                                    <option value="design">Các thiết kế</option>
                                    <option value="construction">Công trình thực tế</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                                    Thêm hình ảnh
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageChange}
                                />
                                <div className="grid grid-cols-3  gap-4">
                                    {images.map((image) => (
                                        <div key={image.id} className="image-wrapper relative">
                                            <img src={image.id} alt="Uploaded Preview" className="shadow-lg rounded-3xl" />
                                            <button className="absolute top-2 right-4 rounded-full bg-white w-8 h-8 shadow-2xl " onClick={() => handleRemoveImage(image.id)}>X</button>
                                        </div>
                                    ))}
                                </div>
                            </div>



                            <div className="mt-6 flex flex-row gap-4">
                                <button className="bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm"
                                    onClick={handleCreateXdndProject}
                                >
                                    Tạo dự án
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default CreateProject;
