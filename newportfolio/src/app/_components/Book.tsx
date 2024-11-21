'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, BookOpen } from 'lucide-react'

export default function Component() {
    const [isOpen, setIsOpen] = useState(false)
    const [writingComplete, setWritingComplete] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            setWritingComplete(true)
        }, 4000)

        return () => clearTimeout(timer)
    }, [])

    const chapters = [
        "Web Development",
        "Mobile Apps",
        "UI/UX Design",
        "Machine Learning",
        "Data Visualization",
        "back-cover"
    ]

    const nextPage = () => {
        if (currentPage < chapters.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const openBook = () => {
        setIsOpen(true)
    }

    const closeBook = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen(false)
        setCurrentPage(0)
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="relative">
                <div
                    className={`book ${isOpen ? 'open' : ''}`}
                    role="region"
                    aria-label={isOpen ? "Open book" : "Closed book"}
                >
                    <div className="book-content">
                        {/* Cover Section */}
                        <div className="cover">
                            <motion.div
                                className="cover-content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: writingComplete ? 1 : 0 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="text-4xl font-bold mb-4">Hi,</h1>
                                <h2 className="text-2xl">Welcome to my portfolio</h2>
                            </motion.div>
                            {!writingComplete && (
                                <motion.svg className="pen" viewBox="0 0 100 100">
                                    <motion.path
                                        d="M20 80 Q 50 20 80 80"
                                        stroke="#000"
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 4, ease: "easeInOut" }}
                                    />
                                    <motion.path
                                        d="M30 70 Q 50 30 70 70"
                                        stroke="#000"
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 4, delay: 0.5, ease: "easeInOut" }}
                                    />
                                    <motion.path
                                        d="M40 60 Q 50 40 60 60"
                                        stroke="#000"
                                        strokeWidth="2"
                                        fill="none"
                                        initial={{ pathLength: 0 }}
                                        animate={{ pathLength: 1 }}
                                        transition={{ duration: 4, delay: 1, ease: "easeInOut" }}
                                    />
                                </motion.svg>
                            )}
                        </div>

                        {/* Pages Section */}
                        <div className="pages">
                            {chapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    className={`page ${index === currentPage ? 'current' : ''}`}
                                // style={{ '--page-index': index } as React.CSSProperties}
                                >
                                    <div className="page-content">
                                        <h3 className="text-xl font-semibold">{chapter}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {currentPage > chapters.length - 1 && <div className="back-cover"></div>}
                    </div>
                </div>

                {/* Button to Open the Book */}
                {!isOpen && (
                    <button
                        onClick={openBook}
                        className="open-button"
                        aria-label="Open book"
                    >
                        <BookOpen size={24} />
                    </button>
                )}

                {/* Navigation Buttons When Book is Open */}
                {isOpen && (
                    <>
                        <div className="navigation-buttons">
                            <button
                                onClick={(e) => { e.stopPropagation(); prevPage(); }}
                                disabled={currentPage === 0}
                                className="nav-button prev"
                                aria-label="Previous page"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); nextPage(); }}
                                disabled={currentPage === chapters.length}
                                className="nav-button next"
                                aria-label="Next page"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                        <button
                            onClick={closeBook}
                            className="close-button"
                            aria-label="Close book"
                        >
                            <X size={24} />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}
