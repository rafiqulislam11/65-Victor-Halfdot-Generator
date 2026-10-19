/**
 * ============================================================================
 * RI CREATIVE AGENCY — ULTIMATE VECTOR STUDIO PRO
 * Complete Generative Vector Art, Halftone Studio & Stock Production Engine
 * ============================================================================
 * Required Filename : RI_Creative_Agency_Ultimate_Vector_Studio_Pro.jsx
 * Developer / Brand : RI Creative Agency
 * Studio Version    : 3.0.0 Enterprise Master Edition
 * Target Software   : Adobe Illustrator 2020–2024 (ExtendScript / ES3)
 * Target Platform   : Windows 10 / Windows 11 & macOS
 * ============================================================================
 * UNIFIED CREATIVE ENGINES (95+ MATHEMATICALLY DISTINCT VECTOR ALGORITHMS):
 *  1. Engine 1 — Halftone & Vector Pattern Studio  (50 Distinct Algorithms, Families A–E)
 *  2. Engine 2 — Fractal & Mathematical Art Studio (10 Bounded Recursive Algorithms)
 *  3. Engine 3 — Mesh Wave & Flow Fields Studio    (10 Parametric Wave & Bezier Algorithms)
 *  4. Engine 4 — Optical Illusion & Moire Studio   (10 Vector Interference Algorithms)
 *  5. Engine 5 — Parametric Geometry & Tiling      (10 Tessellation & Truchet Algorithms)
 *  6. Engine 6 — Organic Scatter Studio            (5 Spatial Collision Avoidance Modes)
 *  7. Engine 7 — Multi-Layer Master Composition    (Dual & Trio Layer Orchestration)
 *
 * PRODUCTION & AUTOMATION PIPELINE:
 *  - High-Resolution Multi-Format Exporter (AI, SVG, PNG 300/600/4K/8K, JPEG, EPS, PDF)
 *  - Multi-Variation Batch Generator (1 to 50 variations with smart parameter mutation)
 *  - Contributor CSV Metadata Assistant (Adobe Stock, Shutterstock & Extended Audit schemas)
 *  - Non-Destructive Reference Image Underlay placement
 *  - Safe Key-Value INI Preset Manager (Save / Load disk presets without eval)
 *  - Built-In Self-Test Diagnostic Suite with comprehensive logging
 *  - Ultra-Clean, Modern 5-Tab ScriptUI Interface with Dynamic Dropdowns & Swatches
 * ============================================================================
 */

#target illustrator
try {
    app.preferences.setBooleanPreference("ShowExternalJSXWarning", false);
} catch (ePref) {}

(function () {
    var STUDIO_BRAND   = "RI Creative Agency";
    var STUDIO_TITLE   = "Ultimate Vector Studio Pro";
    var STUDIO_VERSION = "3.0.0";
    var REQUIRED_FILENAME = "RI_Creative_Agency_Ultimate_Vector_Studio_Pro.jsx";

    // ========================================================================
    // MODULE 1: APPLICATION COMPATIBILITY DETECTION
    // ========================================================================
// ========================================================================
    function detectEnvironment() {
        var verStr = "0.0";
        var majorVer = 0;
        var osName = $.os || "Unknown OS";
        try {
            verStr = String(app.version);
            majorVer = parseInt(verStr.split(".")[0], 10) || 0;
        } catch (e) {}
        // Illustrator 2020 = v24, 2021 = v25, 2022 = v26, 2023 = v27, 2024 = v28
        var isTargetRange = (majorVer >= 24 && majorVer <= 29);
        return {
            appName: (typeof app !== "undefined" && app.name) ? String(app.name) : "Adobe Illustrator",
            versionString: verStr,
            majorVersion: majorVer,
            isSupportedVersion: isTargetRange,
            os: osName
        };
    }

    // ========================================================================

    // ========================================================================
    // MODULE 2: CONFIGURATION, CATALOGS & FACTORY PRESETS
    // ========================================================================
    var ENGINE_CATEGORIES = [
        "Engine 1 — Halftone & Vector Pattern Studio (50 Styles)",
        "Engine 2 — Fractal & Mathematical Art Studio (10 Styles)",
        "Engine 3 — Mesh Wave & Flow Fields Studio (10 Styles)",
        "Engine 4 — Optical Illusion & Moire Studio (10 Styles)",
        "Engine 5 — Parametric Geometry & Tessellation (10 Styles)",
        "Engine 6 — Organic Scatter Studio (5 Modes)"
    ];

    var PATTERN_50_STYLES = [
        // A. Classic Halftone (0 - 9)
        "A1. Classic Dot Grid",
        "A2. Round Dot Halftone (Radial Size)",
        "A3. Square Dot Halftone",
        "A4. Ellipse Halftone",
        "A5. Diamond Halftone",
        "A6. Line Halftone (Scanlines)",
        "A7. Cross-Line Halftone",
        "A8. Circular Grid (Concentric)",
        "A9. Hexagonal Halftone (Honeycomb)",
        "A10. Triangular Halftone (Alternating)",
        // B. Gradient Halftone (10 - 19)
        "B1. Linear Gradient Dots",
        "B2. Radial Gradient Dots",
        "B3. Diagonal Gradient Dots",
        "B4. Multi-Color Gradient Halftone",
        "B5. Fade-Out Halftone (Edge Falloff)",
        "B6. Corner Fade Halftone",
        "B7. Center Glow Halftone",
        "B8. Edge Density Halftone",
        "B9. Dual Gradient Halftone (Bilateral)",
        "B10. Four-Corner Gradient Halftone (Bilinear)",
        // C. Wave & Mesh (20 - 29)
        "C1. Wave Halftone (Sine Displacement)",
        "C2. Double Wave Halftone (Harmonic)",
        "C3. Mesh Wave (2D Warped Nodes)",
        "C4. Flow Wave Dots (Curl Field)",
        "C5. Sine Wave Grid (Continuous Polylines)",
        "C6. Ripple Wave (Damped Radial Sine)",
        "C7. Organic Wave Pattern (Perlin-Approx)",
        "C8. Interference Wave (Two-Source Moire)",
        "C9. Wavy Line Halftone (Modulated Ribbons)",
        "C10. Fluid Mesh Dots (Vortex Advection)",
        // D. Radial & Spiral (30 - 39)
        "D1. Radial Burst (Spoke Rays)",
        "D2. Concentric Rings (Segmented Arcs)",
        "D3. Spiral Dots (Archimedean Spiral)",
        "D4. Double Spiral (Fermat Opposing)",
        "D5. Sunburst Halftone (Angular Wedges)",
        "D6. Circular Ripple (Phase-Shifted Rings)",
        "D7. Vortex Halftone (Logarithmic Twist)",
        "D8. Orbit Dots (Keplerian Ellipses)",
        "D9. Mandala Dot Pattern (Dihedral Symmetry)",
        "D10. Radial Fade (Polar Power-Law)",
        // E. Fractal & Geometric (40 - 49)
        "E1. Fractal Ripple (Multi-Octave Sine)",
        "E2. Fractal Branch Dots (Recursive Bifurcation)",
        "E3. Geometric Halftone (Nested Polygons)",
        "E4. Random Dots (PRNG Scatter)",
        "E5. Organic Scatter (Jittered Stratified Grid)",
        "E6. Voronoi-Inspired Pattern (Nearest-Seed Cell)",
        "E7. Fibonacci Spiral Dots (Golden Angle)",
        "E8. Fractal Wave (Weierstrass Summation)",
        "E9. Geometric Mosaic (Truchet-Style Tiles)",
        "E10. Cellular Dot Pattern (Turing Reaction-Approx)"
    ];

    var FRACTAL_STYLES = [
        "B01. Recursive Branch Fractal",
        "B02. Binary Branching Tree",
        "B03. Radial Branch Fractal",
        "B04. Spiral Recursion",
        "B05. Fibonacci-Inspired Spiral (Golden Angle)",
        "B06. Fractal Ripple (Multi-Octave)",
        "B07. Nested Polygon Fractal",
        "B08. Sierpinski-Style Triangle",
        "B09. Koch-Inspired Line Snowflake",
        "B10. Geometric Fractal Mosaic (Quadtree Subdivision)"
    ];

    var WAVE_STYLES = [
        "C01. Single Sine Wave",
        "C02. Multi-Sine Harmonic Wave",
        "C03. Double-Wave Interference",
        "C04. Mesh Wave Dots",
        "C05. Flowing Bezier Curves",
        "C06. Ripple Field",
        "C07. Circular Wave Field",
        "C08. Radial Flow Lines",
        "C09. Organic Wavy Grid",
        "C10. Multi-Layer Flow Composition"
    ];

    var ILLUSION_STYLES = [
        "D01. Concentric Rings Illusion",
        "D02. Radial Line Burst",
        "D03. Rotated Grid Interference (Moire-Inspired)",
        "D04. Circular Interference (Dual-Center Moire)",
        "D05. Wave Interference Lattice",
        "D06. Spiral Optical Illusion",
        "D07. Checkerboard Perspective Warp",
        "D08. Repeating Line Modulation Illusion",
        "D09. Nested Geometric Frames (Tunnel)",
        "D10. Symmetrical Radial Geometry"
    ];

    var GEOMETRY_STYLES = [
        "E01. Regular Polygon Generator",
        "E02. Starburst Generator",
        "E03. Nested Polygon Generator",
        "E04. Radial Polygon Arrays",
        "E05. Circular Polar Grid",
        "E06. Hexagonal Honeycomb Grid",
        "E07. Triangular Isometric Tessellation",
        "E08. Geometric Diamond Tiling",
        "E09. Cellular-Inspired Voronoi Distance Grid",
        "E10. Repeating Modular Truchet Shapes"
    ];

    var SCATTER_STYLES = [
        "G01. Uniform Random Placement",
        "G02. Radial Gaussian Distribution",
        "G03. Multi-Cluster Colony Placement",
        "G04. Spiral Arm Scatter",
        "G05. Collision-Avoided Poisson-Approximate Scatter"
    ];

    var COLOR_PALETTES = {
        "Cyberpunk Stock Neon": { c1: "#00F5D4", c2: "#00BBF9", c3: "#9B5DE5", c4: "#F15BB5", bg: "#0B0914" },
        "Nordic Minimalist": { c1: "#2B2D42", c2: "#8D99AE", c3: "#EDF2F4", c4: "#EF233C", bg: "#141622" },
        "Solar Gold & Crimson": { c1: "#FFBA08", c2: "#FAA307", c3: "#E85D04", c4: "#9D0208", bg: "#03071E" },
        "Emerald Botanical": { c1: "#D8F3DC", c2: "#74C69D", c3: "#40916C", c4: "#1B4332", bg: "#081C15" },
        "Blueprint Technical": { c1: "#FFFFFF", c2: "#A3D5FF", c3: "#48CAE4", c4: "#0077B6", bg: "#03045E" },
        "Swiss Print Monochrome": { c1: "#111111", c2: "#444444", c3: "#777777", c4: "#BBBBBB", bg: "#F5F5F3" },
        "Sunset Coral & Violet": { c1: "#FF595E", c2: "#FFCA3A", c3: "#8AC926", c4: "#6A4C93", bg: "#191324" },
        "Vaporwave Pastel": { c1: "#FF70A6", c2: "#FF9770", c3: "#FFD670", c4: "#E9FF70", bg: "#2B1E3A" },
        "Deep Space Nebula": { c1: "#00F0FF", c2: "#7000FF", c3: "#FF007A", c4: "#FFE600", bg: "#050510" },
        "Vintage Retro 70s": { c1: "#E76F51", c2: "#F4A261", c3: "#E9C46A", c4: "#2A9D8F", bg: "#264653" },
        "Acid Neon Lime": { c1: "#CCFF00", c2: "#00FF66", c3: "#00FFFF", c4: "#FF00FF", bg: "#050B05" },
        "Obsidian Gold Luxury": { c1: "#FFDF73", c2: "#D4AF37", c3: "#AA771C", c4: "#804A00", bg: "#080706" }
    };

    var FACTORY_PRESETS = {
        "Default — Classic Round Halftone": {
            compMode: 0, primaryEngine: 0, secondaryEngine: 2,
            styleIndex: 1, halftoneStyle: 1, fractalStyle: 0, waveStyle: 4, illusionStyle: 0, geoStyle: 5, scatterStyle: 4,
            width: 1200, height: 1200, units: 0, useBg: true, bgHex: "#0D0B14", margin: 40, edgeFade: 15,
            spacingX: 28, spacingY: 28, minSize: 2, maxSize: 20, density: 100, rotation: 0, scale: 100, randomness: 0,
            waveAmp: 25, waveFreq: 3.0, spiralStr: 3.0, fractalDepth: 4, branchCount: 2, branchAngle: 28, lengthDecay: 72, symmetry: 6,
            illusionRings: 28, illusionContrast: 80, geoVertices: 6, geoSideLen: 26,
            scatterCount: 350, scatterClusters: 4, scatterCollision: true, edgeExclusion: 15,
            colorMode: 2, gradDir: 0, c1: "#00F5D4", c2: "#00BBF9", c3: "#9B5DE5", c4: "#F15BB5",
            useFill: true, useStroke: false, strokeWidth: 1.0, opacity: 100, clipArtboard: true,
            seed: 1042, maxObjects: 8000, batchCount: 1
        },
        "Halftone — Four-Corner Bilinear Glow": {
            compMode: 0, primaryEngine: 0, secondaryEngine: 2,
            styleIndex: 19, halftoneStyle: 19, fractalStyle: 0, waveStyle: 4, illusionStyle: 0, geoStyle: 5, scatterStyle: 4,
            width: 1600, height: 1600, units: 0, useBg: true, bgHex: "#1A1423", margin: 50, edgeFade: 15,
            spacingX: 28, spacingY: 28, minSize: 3, maxSize: 24, density: 100, rotation: 0, scale: 100, randomness: 5,
            waveAmp: 25, waveFreq: 2.0, spiralStr: 3.0, fractalDepth: 4, branchCount: 2, branchAngle: 28, lengthDecay: 72, symmetry: 6,
            illusionRings: 28, illusionContrast: 80, geoVertices: 6, geoSideLen: 26,
            scatterCount: 350, scatterClusters: 4, scatterCollision: true, edgeExclusion: 15,
            colorMode: 2, gradDir: 2, c1: "#FF595E", c2: "#FFCA3A", c3: "#8AC926", c4: "#1982C4",
            useFill: true, useStroke: false, strokeWidth: 1.2, opacity: 95, clipArtboard: true,
            seed: 2088, maxObjects: 8000, batchCount: 1
        },
        "Mathematical — Koch Snowflake & Sacred Rings": {
            compMode: 1, primaryEngine: 1, secondaryEngine: 3,
            styleIndex: 8, halftoneStyle: 1, fractalStyle: 8, waveStyle: 0, illusionStyle: 9, geoStyle: 2, scatterStyle: 1,
            width: 1600, height: 1600, units: 0, useBg: true, bgHex: "#03045E", margin: 80, edgeFade: 15,
            spacingX: 40, spacingY: 40, minSize: 2, maxSize: 18, density: 100, rotation: 0, scale: 100, randomness: 0,
            waveAmp: 25, waveFreq: 4.0, spiralStr: 3.0, fractalDepth: 4, branchCount: 3, branchAngle: 30, lengthDecay: 70, symmetry: 8,
            illusionRings: 20, illusionContrast: 75, geoVertices: 6, geoSideLen: 32,
            scatterCount: 250, scatterClusters: 3, scatterCollision: true, edgeExclusion: 20,
            colorMode: 2, gradDir: 3, c1: "#FFFFFF", c2: "#A3D5FF", c3: "#48CAE4", c4: "#0077B6",
            useFill: false, useStroke: true, strokeWidth: 1.5, opacity: 90, clipArtboard: true,
            seed: 4096, maxObjects: 8000, batchCount: 1
        },
        "Abstract Flow — Smooth Bezier Wave Ribbons": {
            compMode: 0, primaryEngine: 2, secondaryEngine: 0,
            styleIndex: 4, halftoneStyle: 0, fractalStyle: 0, waveStyle: 4, illusionStyle: 0, geoStyle: 0, scatterStyle: 0,
            width: 1920, height: 1080, units: 0, useBg: true, bgHex: "#03071E", margin: 40, edgeFade: 15,
            spacingX: 30, spacingY: 24, minSize: 2, maxSize: 16, density: 100, rotation: 0, scale: 100, randomness: 0,
            waveAmp: 65, waveFreq: 3.0, spiralStr: 3.0, fractalDepth: 4, branchCount: 2, branchAngle: 25, lengthDecay: 72, symmetry: 6,
            illusionRings: 24, illusionContrast: 70, geoVertices: 5, geoSideLen: 25,
            scatterCount: 300, scatterClusters: 3, scatterCollision: false, edgeExclusion: 10,
            colorMode: 2, gradDir: 0, c1: "#FFBA08", c2: "#FAA307", c3: "#E85D04", c4: "#9D0208",
            useFill: false, useStroke: true, strokeWidth: 1.8, opacity: 88, clipArtboard: true,
            seed: 7712, maxObjects: 8000, batchCount: 1
        },
        "Optical — Dual-Center Moire Interference": {
            compMode: 0, primaryEngine: 3, secondaryEngine: 4,
            styleIndex: 3, halftoneStyle: 0, fractalStyle: 0, waveStyle: 0, illusionStyle: 3, geoStyle: 0, scatterStyle: 0,
            width: 1500, height: 1500, units: 0, useBg: true, bgHex: "#141622", margin: 60, edgeFade: 15,
            spacingX: 28, spacingY: 28, minSize: 2, maxSize: 16, density: 100, rotation: 12, scale: 100, randomness: 0,
            waveAmp: 30, waveFreq: 4.0, spiralStr: 3.0, fractalDepth: 4, branchCount: 2, branchAngle: 25, lengthDecay: 70, symmetry: 8,
            illusionRings: 38, illusionContrast: 90, geoVertices: 6, geoSideLen: 24,
            scatterCount: 300, scatterClusters: 3, scatterCollision: true, edgeExclusion: 15,
            colorMode: 1, gradDir: 3, c1: "#EDF2F4", c2: "#EF233C", c3: "#8D99AE", c4: "#2B2D42",
            useFill: false, useStroke: true, strokeWidth: 1.4, opacity: 92, clipArtboard: true,
            seed: 9001, maxObjects: 8000, batchCount: 1
        },
        "Parametric — Truchet Modular Geometric Tiles": {
            compMode: 0, primaryEngine: 4, secondaryEngine: 5,
            styleIndex: 9, halftoneStyle: 0, fractalStyle: 0, waveStyle: 0, illusionStyle: 0, geoStyle: 9, scatterStyle: 4,
            width: 1600, height: 1600, units: 0, useBg: true, bgHex: "#081C15", margin: 60, edgeFade: 15,
            spacingX: 48, spacingY: 48, minSize: 4, maxSize: 28, density: 100, rotation: 0, scale: 100, randomness: 0,
            waveAmp: 20, waveFreq: 3.0, spiralStr: 3.0, fractalDepth: 4, branchCount: 2, branchAngle: 30, lengthDecay: 70, symmetry: 6,
            illusionRings: 24, illusionContrast: 80, geoVertices: 6, geoSideLen: 36,
            scatterCount: 320, scatterClusters: 4, scatterCollision: true, edgeExclusion: 12,
            colorMode: 2, gradDir: 2, c1: "#D8F3DC", c2: "#74C69D", c3: "#40916C", c4: "#1B4332",
            useFill: false, useStroke: true, strokeWidth: 2.2, opacity: 95, clipArtboard: true,
            seed: 31415, maxObjects: 8000, batchCount: 1
        },
        "Wave — Continuous Sine Ribbons": {
            compMode: 0, primaryEngine: 0, secondaryEngine: 2,
            styleIndex: 24, halftoneStyle: 24, fractalStyle: 0, waveStyle: 4, illusionStyle: 0, geoStyle: 5, scatterStyle: 4,
            width: 1600, height: 1000, units: 0, useBg: true, bgHex: "#0B2545", margin: 50, edgeFade: 20,
            spacingX: 22, spacingY: 24, minSize: 1, maxSize: 12, density: 100, rotation: 0, scale: 100, randomness: 0,
            waveAmp: 45, waveFreq: 4.0, spiralStr: 2.0, fractalDepth: 4, branchCount: 2, branchAngle: 28, lengthDecay: 72, symmetry: 6,
            illusionRings: 28, illusionContrast: 80, geoVertices: 6, geoSideLen: 26,
            scatterCount: 350, scatterClusters: 4, scatterCollision: true, edgeExclusion: 15,
            colorMode: 1, gradDir: 0, c1: "#FFFFFF", c2: "#A3D5FF", c3: "#5C9EAD", c4: "#326273",
            useFill: false, useStroke: true, strokeWidth: 2.0, opacity: 90, clipArtboard: true,
            seed: 3011, maxObjects: 8000, batchCount: 1
        },
        "Radial — Mandala Dihedral Symmetry": {
            compMode: 0, primaryEngine: 0, secondaryEngine: 2,
            styleIndex: 38, halftoneStyle: 38, fractalStyle: 0, waveStyle: 4, illusionStyle: 0, geoStyle: 5, scatterStyle: 4,
            width: 1200, height: 1200, units: 0, useBg: true, bgHex: "#03071E", margin: 40, edgeFade: 20,
            spacingX: 28, spacingY: 28, minSize: 2, maxSize: 18, density: 100, rotation: 0, scale: 100, randomness: 0,
            waveAmp: 18, waveFreq: 6.0, spiralStr: 4.0, fractalDepth: 4, branchCount: 2, branchAngle: 28, lengthDecay: 72, symmetry: 6,
            illusionRings: 28, illusionContrast: 80, geoVertices: 6, geoSideLen: 26,
            scatterCount: 350, scatterClusters: 4, scatterCollision: true, edgeExclusion: 15,
            colorMode: 2, gradDir: 1, c1: "#FFBA08", c2: "#FAA307", c3: "#F48C06", c4: "#E85D04",
            useFill: true, useStroke: false, strokeWidth: 1.0, opacity: 100, clipArtboard: true,
            seed: 4099, maxObjects: 8000, batchCount: 1
        },
        "Fractal — Golden Angle Phyllotaxis": {
            compMode: 0, primaryEngine: 0, secondaryEngine: 2,
            styleIndex: 46, halftoneStyle: 46, fractalStyle: 0, waveStyle: 4, illusionStyle: 0, geoStyle: 5, scatterStyle: 4,
            width: 1200, height: 1200, units: 0, useBg: true, bgHex: "#0D0B14", margin: 40, edgeFade: 15,
            spacingX: 22, spacingY: 22, minSize: 2, maxSize: 16, density: 100, rotation: 0, scale: 100, randomness: 0,
            waveAmp: 20, waveFreq: 3.0, spiralStr: 5.0, fractalDepth: 5, branchCount: 2, branchAngle: 28, lengthDecay: 72, symmetry: 6,
            illusionRings: 28, illusionContrast: 80, geoVertices: 6, geoSideLen: 26,
            scatterCount: 350, scatterClusters: 4, scatterCollision: true, edgeExclusion: 15,
            colorMode: 2, gradDir: 1, c1: "#00F5D4", c2: "#00BBF9", c3: "#9B5DE5", c4: "#F15BB5",
            useFill: true, useStroke: false, strokeWidth: 1.0, opacity: 100, clipArtboard: true,
            seed: 7777, maxObjects: 8000, batchCount: 1
        }
    };

    // ========================================================================
    // MODULE 3: CENTRAL ERROR HANDLER, CANCELLATION & MODAL DIALOGS
    // ========================================================================
// ========================================================================
    var ErrorRegistry = {
        entries: [],
        clear: function () {
            this.entries = [];
        },
        log: function (operation, errObj, variationNum, generatorName, paramSummary, filePath) {
            var msg = (errObj && errObj.message) ? String(errObj.message) : String(errObj || "Unknown error");
            var ln = (errObj && errObj.line !== undefined) ? ("Line " + errObj.line) : "N/A";
            var entry = {
                timestamp: (new Date()).toTimeString().split(" ")[0],
                operation: operation || "General",
                variation: variationNum !== undefined ? variationNum : 0,
                generator: generatorName || "N/A",
                message: msg,
                line: ln,
                params: paramSummary || "",
                file: filePath || ""
            };
            this.entries.push(entry);
            return entry;
        },
        formatSummaryText: function () {
            if (this.entries.length === 0) {
                return "No errors recorded.";
            }
            var out = [];
            for (var i = 0; i < this.entries.length; i++) {
                var e = this.entries[i];
                out.push(
                    "[" + e.timestamp + "] Op: " + e.operation +
                    " | Var #" + e.variation +
                    " | Gen: " + e.generator +
                    " | Msg: " + e.message + " (" + e.line + ")" +
                    (e.file ? " | File: " + e.file : "")
                );
            }
            return out.join("\n");
        }
    };

    var ExecutionController = {
        cancelRequested: false,
        objectCounter: 0,
        objectBudget: 10000,
        reset: function (budget) {
            this.cancelRequested = false;
            this.objectCounter = 0;
            this.objectBudget = Math.max(50, parseInt(budget, 10) || 10000);
        },
        canContinue: function () {
            return !this.cancelRequested && (this.objectCounter < this.objectBudget);
        },
        recordObject: function () {
            this.objectCounter++;
        }
    };

    /**
     * Custom ScriptUI Modal Dialog (Replaces forbidden alert/confirm)
     */
    function showStudioDialog(title, message, isConfirmQuestion) {
        var dlg = new Window("dialog", title || STUDIO_TITLE);
        dlg.orientation = "column";
        dlg.alignChildren = ["fill", "top"];
        dlg.margins = 16;
        dlg.spacing = 12;

        var txt = dlg.add("edittext", [0, 0, 480, 140], String(message), { multiline: true, readonly: true, scrolling: true });
        var btnGrp = dlg.add("group");
        btnGrp.orientation = "row";
        btnGrp.alignment = ["right", "center"];
        btnGrp.spacing = 10;

        var accepted = false;
        if (isConfirmQuestion) {
            var btnCancel = btnGrp.add("button", undefined, "Cancel", { name: "cancel" });
            var btnProceed = btnGrp.add("button", undefined, "Proceed", { name: "ok" });
            btnCancel.onClick = function () { accepted = false; dlg.close(); };
            btnProceed.onClick = function () { accepted = true; dlg.close(); };
        } else {
            var btnOk = btnGrp.add("button", undefined, "OK", { name: "ok" });
            btnOk.onClick = function () { accepted = true; dlg.close(); };
        }
        dlg.center();
        dlg.show();
        return accepted;
    }

    // ========================================================================

    // ========================================================================
    // MODULE 4: SEEDED REPRODUCIBLE PRNG & MATHEMATICAL HELPERS
    // ========================================================================
// ========================================================================
    function SeededRNG(seedVal) {
        var initial = Math.abs(parseInt(seedVal, 10));
        if (isNaN(initial) || initial <= 0) initial = 1337;
        this.seed = initial % 2147483647;
        if (this.seed <= 0) this.seed += 2147483646;
        this.state = this.seed;
    }
    SeededRNG.prototype.next = function () {
        this.state = (this.state * 16807) % 2147483647;
        return (this.state - 1) / 2147483646;
    };
    SeededRNG.prototype.range = function (minV, maxV) {
        return minV + this.next() * (maxV - minV);
    };
    SeededRNG.prototype.nextInt = function (minI, maxI) {
        return Math.floor(this.range(minI, maxI + 0.9999));
    };
    SeededRNG.prototype.gaussian = function () {
        var u = Math.max(1e-7, this.next());
        var v = Math.max(1e-7, this.next());
        return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    };

    /**
     * Smooth 2D trigonometric hash field for reproducible organic waves & scatter
     */
    function fieldNoise2D(x, y, seed) {
        var s = (seed || 101) * 0.071;
        var n1 = Math.sin(x * 12.9898 + y * 78.233 + s) * 43758.5453;
        var f1 = n1 - Math.floor(n1);
        var n2 = Math.cos(x * 4.898 - y * 9.233 - s) * 23421.631;
        var f2 = n2 - Math.floor(n2);
        return Math.max(0, Math.min(1, (Math.sin(x) * Math.cos(y) + (f1 - 0.5) * 0.35 + (f2 - 0.5) * 0.25 + 1.0) * 0.5));
    }

    function clampNum(val, minV, maxV, fallback) {
        var n = parseFloat(val);
        if (isNaN(n)) return fallback !== undefined ? fallback : minV;
        if (n < minV) return minV;
        if (n > maxV) return maxV;
        return n;
    }

    // ========================================================================

    // ========================================================================
    // MODULE 5: INPUT VALIDATION, UNIT CONVERSION & WORKLOAD ESTIMATION
    // ========================================================================
// ========================================================================
    function convertToPoints(value, unitIndex) {
        var v = parseFloat(value);
        if (isNaN(v)) return 0;
        switch (unitIndex) {
            case 0: return v;                  // Pixels (1 px = 1 pt in Illustrator)
            case 1: return v;                  // Points
            case 2: return v * 72.0;           // Inches
            case 3: return v * (72.0 / 25.4);  // Millimeters
            default: return v;
        }
    }

    function convertFromPoints(pts, unitIndex) {
        switch (unitIndex) {
            case 0: return Math.round(pts * 100) / 100;
            case 1: return Math.round(pts * 100) / 100;
            case 2: return Math.round((pts / 72.0) * 100) / 100;
            case 3: return Math.round((pts / (72.0 / 25.4)) * 10) / 10;
            default: return pts;
        }
    }

    /**
     * Estimates expected vector path count before generation so we can warn the user
     */
    function estimateGeneratorWorkload(cfg, engineIndex) {
        var W = Math.max(100, cfg.widthPts - cfg.marginPts * 2);
        var H = Math.max(100, cfg.heightPts - cfg.marginPts * 2);
        var spX = Math.max(4, cfg.spacingXPts * (cfg.scale / 100.0));
        var spY = Math.max(4, cfg.spacingYPts * (cfg.scale / 100.0));
        var gridEst = Math.ceil(W / spX) * Math.ceil(H / spY) * (cfg.density / 100.0);

        if (engineIndex === 0) {
            // Engine A: Halftone Lab
            if (cfg.halftoneStyle === 7) return Math.ceil(H / spY);
            if (cfg.halftoneStyle === 8) return Math.ceil(H / spY) * 2;
            return Math.round(gridEst);
        } else if (engineIndex === 1) {
            // Engine B: Fractal Lab
            var d = Math.max(1, Math.min(8, cfg.fractalDepth));
            var b = Math.max(2, Math.min(5, cfg.branchCount));
            if (cfg.fractalStyle === 0 || cfg.fractalStyle === 1) {
                return Math.round((Math.pow(b, d + 1) - 1) / (b - 1));
            } else if (cfg.fractalStyle === 2) {
                return cfg.symmetry * Math.round(Math.pow(2, d));
            } else if (cfg.fractalStyle === 7) {
                return Math.round(Math.pow(3, Math.min(6, d)));
            } else if (cfg.fractalStyle === 8) {
                return 1; // Single closed Koch snowflake polygon with 3*4^d vertices
            }
            return Math.min(cfg.maxObjects, Math.round(gridEst * 0.7));
        } else if (engineIndex === 2) {
            // Engine C: Mesh Wave & Flow Fields
            if (cfg.waveStyle === 3 || cfg.waveStyle === 5) return Math.round(gridEst);
            if (cfg.waveStyle === 9) return cfg.waveLines * 3;
            return cfg.waveLines;
        } else if (engineIndex === 3) {
            // Engine D: Optical Illusion
            if (cfg.illusionStyle === 6) return Math.min(2500, Math.round(gridEst));
            return cfg.illusionRings * 2;
        } else if (engineIndex === 4) {
            // Engine E: Parametric Geometry
            return Math.round(gridEst);
        } else if (engineIndex === 5) {
            // Engine G: Organic Scatter
            return cfg.scatterCount;
        }
        return Math.round(gridEst);
    }

    function estimateTotalCompositionWorkload(cfg) {
        var total = estimateGeneratorWorkload(cfg, cfg.primaryEngine);
        if (cfg.compMode === 1) {
            total += estimateGeneratorWorkload(cfg, cfg.secondaryEngine);
        } else if (cfg.compMode === 2) {
            total += estimateGeneratorWorkload(cfg, cfg.secondaryEngine);
            total += Math.min(400, cfg.scatterCount);
        }
        return total;
    }

    // ========================================================================

    // ========================================================================
    // MODULE 6: COLOR & GRADIENT STUDIO UTILITIES
    // ========================================================================
// ========================================================================
    function isValidHexColor(str) {
        if (typeof str !== "string") return false;
        var clean = str.replace(/^\s+|\s+$/g, "");
        return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(clean);
    }

    function normalizeHexColor(str, fallbackHex) {
        if (!isValidHexColor(str)) return fallbackHex || "#000000";
        var clean = str.replace(/^\s+|\s+$/g, "").replace(/^#/, "").toUpperCase();
        if (clean.length === 3) {
            clean = clean.charAt(0) + clean.charAt(0) +
                    clean.charAt(1) + clean.charAt(1) +
                    clean.charAt(2) + clean.charAt(2);
        }
        return "#" + clean;
    }

    function hexToRGB(hexStr) {
        var h = normalizeHexColor(hexStr, "#000000").substring(1);
        return {
            r: parseInt(h.substring(0, 2), 16) || 0,
            g: parseInt(h.substring(2, 4), 16) || 0,
            b: parseInt(h.substring(4, 6), 16) || 0
        };
    }

    function rgbToHex(r, g, b) {
        function toHexByte(n) {
            var c = Math.max(0, Math.min(255, Math.round(n)));
            var s = c.toString(16).toUpperCase();
            return s.length === 1 ? "0" + s : s;
        }
        return "#" + toHexByte(r) + toHexByte(g) + toHexByte(b);
    }

    function makeAIColor(r, g, b) {
        var c = new RGBColor();
        c.red = Math.max(0, Math.min(255, Math.round(r)));
        c.green = Math.max(0, Math.min(255, Math.round(g)));
        c.blue = Math.max(0, Math.min(255, Math.round(b)));
        return c;
    }

    function lerpRGB(cA, cB, t) {
        var u = Math.max(0, Math.min(1, t));
        return {
            r: cA.r + (cB.r - cA.r) * u,
            g: cA.g + (cB.g - cA.g) * u,
            b: cA.b + (cB.b - cA.b) * u
        };
    }

    /**
     * Generates Monochrome, Duotone, or Complementary palette harmonies from C1
     */
    function computeHarmonyPalette(baseHex, harmonyType) {
        var base = hexToRGB(baseHex);
        if (harmonyType === "Monochrome") {
            return {
                c1: rgbToHex(base.r * 0.35, base.g * 0.35, base.b * 0.35),
                c2: rgbToHex(base.r * 0.70, base.g * 0.70, base.b * 0.70),
                c3: rgbToHex(base.r, base.g, base.b),
                c4: rgbToHex(base.r + (255 - base.r) * 0.55, base.g + (255 - base.g) * 0.55, base.b + (255 - base.b) * 0.55)
            };
        } else if (harmonyType === "Duotone") {
            var comp = { r: 255 - base.r, g: Math.round((base.g + 128) % 255), b: 255 - base.b };
            var m1 = lerpRGB(base, comp, 0.33);
            var m2 = lerpRGB(base, comp, 0.67);
            return {
                c1: rgbToHex(base.r, base.g, base.b),
                c2: rgbToHex(m1.r, m1.g, m1.b),
                c3: rgbToHex(m2.r, m2.g, m2.b),
                c4: rgbToHex(comp.r, comp.g, comp.b)
            };
        } else {
            // Complementary / Split-Complementary
            var invR = 255 - base.r;
            var invG = 255 - base.g;
            var invB = 255 - base.b;
            return {
                c1: rgbToHex(base.r, base.g, base.b),
                c2: rgbToHex((base.r + invG) * 0.5, (base.g + invB) * 0.5, base.b),
                c3: rgbToHex(invR, (invG + base.r) * 0.5, invB),
                c4: rgbToHex(invR, invG, invB)
            };
        }
    }

    function evaluatePaletteColor(x, y, W, H, cx, cy, maxR, cfg, paletteRGB, indexProgress) {
        var t = 0;
        var nx = Math.max(0, Math.min(1, x / Math.max(1, W)));
        var ny = Math.max(0, Math.min(1, y / Math.max(1, H)));

        if (cfg.primaryEngine === 0 && cfg.halftoneStyle === 11) {
            // Four-Corner Color Halftone bilinear interpolation
            var topC = lerpRGB(paletteRGB.c1, paletteRGB.c2, nx);
            var botC = lerpRGB(paletteRGB.c3, paletteRGB.c4, nx);
            var bi = lerpRGB(topC, botC, ny);
            return makeAIColor(bi.r, bi.g, bi.b);
        }

        switch (cfg.gradDir) {
            case 0: t = nx; break; // Horizontal
            case 1: t = ny; break; // Vertical
            case 2: t = (nx + ny) * 0.5; break; // Diagonal
            case 3: // Radial
                var dx = x - cx, dy = y - cy;
                t = Math.min(1, Math.sqrt(dx * dx + dy * dy) / Math.max(1, maxR));
                break;
            case 4: // Index/Sequence progression
                t = indexProgress !== undefined ? indexProgress : ((Math.atan2(y - cy, x - cx) + Math.PI) / (2 * Math.PI));
                break;
            default: t = nx;
        }

        t = Math.max(0, Math.min(1, t));
        var rgb;
        if (cfg.colorMode === 0) {
            rgb = paletteRGB.c1;
        } else if (cfg.colorMode === 1) {
            rgb = lerpRGB(paletteRGB.c1, paletteRGB.c2, t);
        } else {
            if (t < 0.3333) {
                rgb = lerpRGB(paletteRGB.c1, paletteRGB.c2, t * 3.0);
            } else if (t < 0.6667) {
                rgb = lerpRGB(paletteRGB.c2, paletteRGB.c3, (t - 0.3333) * 3.0);
            } else {
                rgb = lerpRGB(paletteRGB.c3, paletteRGB.c4, (t - 0.6667) * 3.0);
            }
        }
        return makeAIColor(rgb.r, rgb.g, rgb.b);
    }

    function resolveBlendMode(blendIndex) {
        switch (blendIndex) {
            case 1: return BlendModes.MULTIPLY;
            case 2: return BlendModes.SCREEN;
            case 3: return BlendModes.OVERLAY;
            case 4: return BlendModes.DARKEN;
            case 5: return BlendModes.LIGHTEN;
            case 6: return BlendModes.DIFFERENCE;
            default: return BlendModes.NORMAL;
        }
    }

    // ========================================================================

    // ========================================================================
    // MODULE 7: VECTOR PRIMITIVE & SMOOTH BEZIER CONSTRUCTION HELPERS
    // ========================================================================
// ========================================================================
    function styleVectorItem(item, aiColor, useFill, useStroke, strokeW, opacityVal, blendEnum) {
        if (!item) return;
        item.filled = Boolean(useFill);
        if (useFill && aiColor) {
            item.fillColor = aiColor;
        }
        item.stroked = Boolean(useStroke);
        if (useStroke && aiColor) {
            item.strokeColor = aiColor;
            item.strokeWidth = Math.max(0.1, strokeW || 1.0);
        }
        if (opacityVal !== undefined && opacityVal < 100) {
            item.opacity = Math.max(1, Math.min(100, opacityVal));
        }
        if (blendEnum && blendEnum !== BlendModes.NORMAL) {
            try { item.blendingMode = blendEnum; } catch (e) {}
        }
        ExecutionController.recordObject();
    }

    function createCircleItem(parentGroup, cx, cy, radius, canvasH) {
        var r = Math.max(0.25, radius);
        return parentGroup.pathItems.ellipse((canvasH - cy) + r, cx - r, r * 2, r * 2);
    }

    function createEllipseItem(parentGroup, cx, cy, rx, ry, rotDeg, canvasH) {
        var safeRx = Math.max(0.25, rx);
        var safeRy = Math.max(0.25, ry);
        var el = parentGroup.pathItems.ellipse((canvasH - cy) + safeRy, cx - safeRx, safeRx * 2, safeRy * 2);
        if (rotDeg && Math.abs(rotDeg) > 0.05) {
            el.rotate(rotDeg);
        }
        return el;
    }

    function createRectItem(parentGroup, cx, cy, w, h, rotDeg, canvasH) {
        var sw = Math.max(0.5, w);
        var sh = Math.max(0.5, h);
        var rc = parentGroup.pathItems.rectangle((canvasH - cy) + sh * 0.5, cx - sw * 0.5, sw, sh);
        if (rotDeg && Math.abs(rotDeg) > 0.05) {
            rc.rotate(rotDeg);
        }
        return rc;
    }

    function createPolylineItem(parentGroup, ptsArray, isClosed, canvasH) {
        if (!ptsArray || ptsArray.length < 2) return null;
        var pathItem = parentGroup.pathItems.add();
        var aiCoords = [];
        for (var i = 0; i < ptsArray.length; i++) {
            aiCoords.push([ptsArray[i][0], canvasH - ptsArray[i][1]]);
        }
        pathItem.setEntirePath(aiCoords);
        pathItem.closed = Boolean(isClosed);
        return pathItem;
    }

    /**
     * Creates a smooth Catmull-Rom / cubic Bezier path using native PathPoint direction handles
     */
    function createSmoothBezierPath(parentGroup, ptsArray, isClosed, smoothnessPct, canvasH) {
        if (!ptsArray || ptsArray.length < 2) return null;
        var tension = clampNum(smoothnessPct, 0, 100, 50) / 300.0;
        if (tension <= 0.01 || ptsArray.length < 3) {
            return createPolylineItem(parentGroup, ptsArray, isClosed, canvasH);
        }
        var pathItem = parentGroup.pathItems.add();
        var n = ptsArray.length;
        for (var i = 0; i < n; i++) {
            var pPrev = ptsArray[i === 0 ? (isClosed ? n - 1 : 0) : i - 1];
            var pCurr = ptsArray[i];
            var pNext = ptsArray[i === n - 1 ? (isClosed ? 0 : n - 1) : i + 1];

            var ax = pCurr[0];
            var ay = canvasH - pCurr[1];
            var dx = (pNext[0] - pPrev[0]) * tension;
            var dy = ((canvasH - pNext[1]) - (canvasH - pPrev[1])) * tension;

            var pp = pathItem.pathPoints.add();
            pp.anchor = [ax, ay];
            pp.leftDirection = [ax - dx, ay - dy];
            pp.rightDirection = [ax + dx, ay + dy];
            pp.pointType = PointType.SMOOTH;
        }
        pathItem.closed = Boolean(isClosed);
        return pathItem;
    }

    function createRegularPolygonItem(parentGroup, cx, cy, radius, numSides, rotRad, canvasH) {
        var sides = Math.max(3, Math.min(64, Math.round(numSides)));
        var r = Math.max(0.5, radius);
        var pts = [];
        for (var i = 0; i < sides; i++) {
            var a = (i * 2.0 * Math.PI / sides) + (rotRad || 0);
            pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
        }
        return createPolylineItem(parentGroup, pts, true, canvasH);
    }

    function createStarItem(parentGroup, cx, cy, outerR, innerR, numPoints, rotRad, canvasH) {
        var ptsCount = Math.max(3, Math.min(48, Math.round(numPoints)));
        var rOut = Math.max(0.5, outerR);
        var rIn = Math.max(0.25, innerR);
        var pts = [];
        var totalVerts = ptsCount * 2;
        for (var i = 0; i < totalVerts; i++) {
            var r = (i % 2 === 0) ? rOut : rIn;
            var a = (i * Math.PI / ptsCount) + (rotRad || 0);
            pts.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
        }
        return createPolylineItem(parentGroup, pts, true, canvasH);
    }

    function computeEdgeFade(x, y, W, H, margin, edgeExclusionPct) {
        var dL = x - margin;
        var dR = (W - margin) - x;
        var dT = y - margin;
        var dB = (H - margin) - y;
        var minD = Math.min(Math.min(dL, dR), Math.min(dT, dB));
        if (minD < 0) return 0;
        if (edgeExclusionPct <= 0) return 1.0;
        var zone = Math.max(1, Math.min(W, H) * (edgeExclusionPct / 100.0) * 0.45);
        return minD < zone ? (minD / zone) : 1.0;
    }

    // ========================================================================
function drawCircle(group, cx, cy, radius, H) {
        var r = Math.max(0.25, radius);
        var top = (H - cy) + r;
        var left = cx - r;
        return group.pathItems.ellipse(top, left, r * 2, r * 2);
    }

    function drawEllipse(group, cx, cy, rx, ry, rotDeg, H) {
        var w = Math.max(0.5, rx * 2);
        var h = Math.max(0.5, ry * 2);
        var top = (H - cy) + ry;
        var left = cx - rx;
        var item = group.pathItems.ellipse(top, left, w, h);
        if (rotDeg && Math.abs(rotDeg) > 0.01) {
            item.rotate(rotDeg);
        }
        return item;
    }

    function drawSquare(group, cx, cy, size, rotDeg, H) {
        var s = Math.max(0.5, size);
        var top = (H - cy) + s * 0.5;
        var left = cx - s * 0.5;
        var item = group.pathItems.rectangle(top, left, s, s);
        if (rotDeg && Math.abs(rotDeg) > 0.01) {
            item.rotate(rotDeg);
        }
        return item;
    }

    function drawPolygonPoints(group, ptsArray, closed, H) {
        var item = group.pathItems.add();
        var aiPts = [];
        for (var i = 0; i < ptsArray.length; i++) {
            aiPts.push([ptsArray[i][0], H - ptsArray[i][1]]);
        }
        item.setEntirePath(aiPts);
        item.closed = Boolean(closed);
        return item;
    }

    function drawRegularPolygon(group, cx, cy, radius, sides, rotRad, H) {
        var pts = [];
        var r = Math.max(0.5, radius);
        for (var i = 0; i < sides; i++) {
            var ang = (i * 2 * Math.PI / sides) + (rotRad || 0);
            pts.push([cx + Math.cos(ang) * r, cy + Math.sin(ang) * r]);
        }
        return drawPolygonPoints(group, pts, true, H);
    }

    /**
     * Computes edge fade multiplier (0..1) and gradient parameter t (0..1) for any point (x, y)
     */
    function computeEdgeFadeFactor(x, y, W, H, margin, edgeFadePct) {
        var dLeft = x - margin;
        var dRight = (W - margin) - x;
        var dTop = y - margin;
        var dBottom = (H - margin) - y;
        var minDist = Math.min(Math.min(dLeft, dRight), Math.min(dTop, dBottom));
        if (minDist < 0) return 0;
        if (edgeFadePct <= 0) return 1.0;
        var fadeZone = Math.max(1, Math.min(W, H) * (edgeFadePct / 100.0) * 0.5);
        if (minDist < fadeZone) {
            return minDist / fadeZone;
        }
        return 1.0;
    }

    function hexToRGBObject(hexStr) {
        return hexToRGB(hexStr);
    }

    function rgbToAIColor(r, g, b) {
        return makeAIColor(r, g, b);
    }

    function interpolateRGB(cA, cB, t) {
        return lerpRGB(cA, cB, t);
    }

    function evaluateMultiStopGradient(c1, c2, c3, c4, t, colorMode) {
        var u = Math.max(0, Math.min(1, t));
        if (colorMode === 0) {
            return c1;
        } else if (colorMode === 1) {
            return lerpRGB(c1, c2, u);
        } else {
            if (u < 0.3333) {
                return lerpRGB(c1, c2, u * 3.0);
            } else if (u < 0.6667) {
                return lerpRGB(c2, c3, (u - 0.3333) * 3.0);
            } else {
                return lerpRGB(c3, c4, (u - 0.6667) * 3.0);
            }
        }
    }

    function pseudoNoise2D(x, y, seed) {
        return fieldNoise2D(x, y, seed);
    }

    function applyItemStyle(item, fillCol, strokeCol, useFill, useStroke, strokeW, opacityVal, blendEnum) {
        if (!item) return;
        item.filled = Boolean(useFill);
        if (useFill && fillCol) {
            item.fillColor = fillCol;
        }
        item.stroked = Boolean(useStroke);
        if (useStroke && (strokeCol || fillCol)) {
            item.strokeColor = strokeCol || fillCol;
            item.strokeWidth = Math.max(0.1, strokeW || 1.0);
        }
        if (opacityVal !== undefined && opacityVal < 100) {
            item.opacity = Math.max(1, Math.min(100, opacityVal));
        }
        if (blendEnum && blendEnum !== BlendModes.NORMAL) {
            try { item.blendingMode = blendEnum; } catch (e) {}
        }
        ExecutionController.recordObject();
    }

    function computeColorForPoint(x, y, W, H, cx, cy, maxR, cfg, c1, c2, c3, c4) {
        var t = 0;
        var nx = Math.max(0, Math.min(1, x / Math.max(1, W)));
        var ny = Math.max(0, Math.min(1, y / Math.max(1, H)));

        if (cfg.styleIndex === 19) {
            // B10: Four-Corner Bilinear Color Interpolation
            var topCol = interpolateRGB(c1, c2, nx);
            var botCol = interpolateRGB(c3, c4, nx);
            var biCol = interpolateRGB(topCol, botCol, ny);
            return rgbToAIColor(biCol.r, biCol.g, biCol.b);
        }

        switch (cfg.gradDir) {
            case 0: // Horizontal
                t = nx;
                break;
            case 1: // Vertical
                t = ny;
                break;
            case 2: // Diagonal
                t = (nx + ny) * 0.5;
                break;
            case 3: // Radial from Center
                var dx = x - cx;
                var dy = y - cy;
                t = Math.sqrt(dx * dx + dy * dy) / Math.max(1, maxR);
                break;
            case 4: // Angular Conic
                var ang = Math.atan2(y - cy, x - cx);
                t = (ang + Math.PI) / (2 * Math.PI);
                break;
            default:
                t = nx;
        }
        var rgb = evaluateMultiStopGradient(c1, c2, c3, c4, t, cfg.colorMode);
        return rgbToAIColor(rgb.r, rgb.g, rgb.b);
    }

    function getBlendModeEnum(index) {
        switch (index) {
            case 1: return BlendModes.MULTIPLY;
            case 2: return BlendModes.SCREEN;
            case 3: return BlendModes.OVERLAY;
            case 4: return BlendModes.DARKEN;
            case 5: return BlendModes.LIGHTEN;
            case 6: return BlendModes.DIFFERENCE;
            default: return BlendModes.NORMAL;
        }
    }

    /**
     * Master Pattern Generation Engine
     * Executes the mathematical algorithm corresponding to cfg.styleIndex (0..49)
     * and populates targetGroup with editable native vector PathItems.
     */

    // ========================================================================
    // MODULE 8: CREATIVE ENGINE 1 — HALFTONE & VECTOR PATTERN STUDIO (50 STYLES)
    // ========================================================================
function generatePatternVectorArtwork(targetGroup, cfg, rng) {
        var W = cfg.widthPts;
        var H = cfg.heightPts;
        var margin = cfg.marginPts;
        var scaleMul = Math.max(0.1, cfg.scale / 100.0);
        var spX = Math.max(4, cfg.spacingXPts * scaleMul);
        var spY = Math.max(4, cfg.spacingYPts * scaleMul);
        var minS = Math.max(0.5, cfg.minSizePts * scaleMul);
        var maxS = Math.max(minS + 0.5, cfg.maxSizePts * scaleMul);
        var rotRad = (cfg.rotation * Math.PI) / 180.0;
        var cosR = Math.cos(rotRad);
        var sinR = Math.sin(rotRad);

        var cx = W * (cfg.centerX / 100.0) + cfg.offsetXPts;
        var cy = H * (cfg.centerY / 100.0) + cfg.offsetYPts;
        var usableW = Math.max(1, W - margin * 2);
        var usableH = Math.max(1, H - margin * 2);
        var maxRadius = Math.max(1, Math.min(usableW, usableH) * 0.5);

        var c1 = hexToRGBObject(cfg.c1);
        var c2 = hexToRGBObject(cfg.c2);
        var c3 = hexToRGBObject(cfg.c3);
        var c4 = hexToRGBObject(cfg.c4);
        var blendEnum = getBlendModeEnum(cfg.blendMode);

        var maxObjects = Math.max(50, Math.min(25000, cfg.maxObjects));
        var createdCount = 0;
        var densityProb = Math.max(1, Math.min(100, cfg.density)) / 100.0;
        var randFactor = cfg.randomness / 100.0;
        var styleIdx = cfg.styleIndex;

        // Helper to style and count each created item
        function finalizePath(item, px, py) {
            if (!item) return;
            var col = computeColorForPoint(px, py, W, H, cx, cy, maxRadius, cfg, c1, c2, c3, c4);
            applyItemStyle(item, col, col, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
            createdCount++;
        }

        // Helper for rotated grid iteration with exact symmetric center-out alignment
        function iterateGrid(rowShiftHex, callback) {
            var rowPitch = rowShiftHex ? (spY * 0.86602540378) : spY;
            var isAxisAligned = (Math.abs(cfg.rotation % 360) < 0.01);
            var halfCols, halfRows;

            if (isAxisAligned) {
                halfCols = Math.floor((usableW * 0.5 + 0.001) / spX);
                halfRows = Math.floor((usableH * 0.5 + 0.001) / rowPitch);
            } else {
                var diag = Math.sqrt(usableW * usableW + usableH * usableH);
                halfCols = Math.ceil((diag * 0.5) / spX) + 1;
                halfRows = Math.ceil((diag * 0.5) / rowPitch) + 1;
            }

            var totalEst = (halfCols * 2 + 1) * (halfRows * 2 + 1);
            if (totalEst > maxObjects * 1.4) {
                var ratio = Math.sqrt(totalEst / maxObjects);
                spX *= ratio;
                spY *= ratio;
                rowPitch = rowShiftHex ? (spY * 0.86602540378) : spY;
                halfCols = Math.max(1, Math.floor(halfCols / ratio));
                halfRows = Math.max(1, Math.floor(halfRows / ratio));
            }

            for (var r = -halfRows; r <= halfRows; r++) {
                if (createdCount >= maxObjects) break;
                for (var c = -halfCols; c <= halfCols; c++) {
                    if (createdCount >= maxObjects) break;
                    if (densityProb < 1.0 && rng.next() > densityProb) continue;

                    var hexShift = 0;
                    if (rowShiftHex) {
                        hexShift = (Math.abs(r) % 2 === 1) ? (spX * 0.25) : (-spX * 0.25);
                    }
                    var gx = c * spX + hexShift;
                    var gy = r * rowPitch;

                    // Rotate around canvas center
                    var rx = cx + (gx * cosR - gy * sinR);
                    var ry = cy + (gx * sinR + gy * cosR);

                    if (randFactor > 0) {
                        rx += (rng.next() - 0.5) * spX * randFactor;
                        ry += (rng.next() - 0.5) * spY * randFactor;
                    }

                    if (rx < margin - 0.01 || rx > W - margin + 0.01 || ry < margin - 0.01 || ry > H - margin + 0.01) continue;
                    var fade = computeEdgeFadeFactor(rx, ry, W, H, margin, cfg.edgeFade);
                    if (fade <= 0.01) continue;

                    callback(rx, ry, r, c, fade);
                }
            }
        }

        /* ====================================================================
         * FAMILY A: CLASSIC HALFTONE (Styles 0 - 9)
         * ==================================================================== */
        if (styleIdx >= 0 && styleIdx <= 9) {
            if (styleIdx === 5 || styleIdx === 6) {
                // A6: Line Halftone (Scanlines) & A7: Cross-Line Halftone
                var passes = (styleIdx === 6) ? 2 : 1;
                for (var p = 0; p < passes; p++) {
                    var passAngle = rotRad + (p === 1 ? Math.PI * 0.5 : 0);
                    var pCos = Math.cos(passAngle);
                    var pSin = Math.sin(passAngle);
                    var numLines = Math.min(Math.floor(maxObjects / passes), Math.ceil(Math.sqrt(W * W + H * H) / spY));
                    var halfL = Math.floor(numLines / 2);
                    var segSteps = 32;

                    for (var li = -halfL; li <= halfL; li++) {
                        if (createdCount >= maxObjects) break;
                        var ly = li * spY;
                        var pts = [];
                        for (var si = -segSteps; si <= segSteps; si++) {
                            var lx = (si / segSteps) * (Math.max(W, H) * 0.75);
                            var wx = cx + (lx * pCos - ly * pSin);
                            var wy = cy + (lx * pSin + ly * pCos);
                            if (wx >= margin && wx <= W - margin && wy >= margin && wy <= H - margin) {
                                pts.push([wx, wy]);
                            }
                        }
                        if (pts.length >= 2) {
                            var midPt = pts[Math.floor(pts.length / 2)];
                            var distNorm = Math.sqrt((midPt[0] - cx) * (midPt[0] - cx) + (midPt[1] - cy) * (midPt[1] - cy)) / maxRadius;
                            var sw = minS + (maxS - minS) * (1.0 - Math.min(1, distNorm)) * 0.45;
                            var lineItem = drawPolygonPoints(targetGroup, pts, false, H);
                            var col = computeColorForPoint(midPt[0], midPt[1], W, H, cx, cy, maxRadius, cfg, c1, c2, c3, c4);
                            applyItemStyle(lineItem, col, col, false, true, Math.max(0.5, sw), cfg.opacity, blendEnum);
                            createdCount++;
                        }
                    }
                }
            } else if (styleIdx === 7) {
                // A8: Circular Grid (Concentric Halftone Rings of Dots)
                var numRings = Math.ceil(maxRadius / spY);
                for (var ri = 1; ri <= numRings; ri++) {
                    if (createdCount >= maxObjects) break;
                    var rad = ri * spY;
                    var circum = 2 * Math.PI * rad;
                    var countOnRing = Math.max(6, Math.floor(circum / spX));
                    for (var ai = 0; ai < countOnRing; ai++) {
                        if (createdCount >= maxObjects) break;
                        if (densityProb < 1.0 && rng.next() > densityProb) continue;
                        var ang = (ai / countOnRing) * 2 * Math.PI + rotRad;
                        var px = cx + Math.cos(ang) * rad;
                        var py = cy + Math.sin(ang) * rad;
                        if (px < margin || px > W - margin || py < margin || py > H - margin) continue;
                        var fade = computeEdgeFadeFactor(px, py, W, H, margin, cfg.edgeFade);
                        var t = 1.0 - Math.min(1.0, rad / maxRadius);
                        var sz = (minS + (maxS - minS) * t) * fade;
                        var dot = drawCircle(targetGroup, px, py, sz * 0.5, H);
                        finalizePath(dot, px, py);
                    }
                }
            } else {
                // Grid-based Classic Halftones: A1, A2, A3, A4, A5, A9, A10
                var isHex = (styleIdx === 8 || styleIdx === 9);
                iterateGrid(isHex, function (px, py, r, c, fade) {
                    var dx = px - cx;
                    var dy = py - cy;
                    var dNorm = Math.min(1.0, Math.sqrt(dx * dx + dy * dy) / maxRadius);
                    var mod = (styleIdx === 0) ? 0.65 : (1.0 - dNorm);
                    if (randFactor > 0) {
                        mod = Math.max(0.1, Math.min(1.0, mod + (rng.next() - 0.5) * randFactor));
                    }
                    var sz = (minS + (maxS - minS) * mod) * fade;
                    var item = null;

                    if (styleIdx === 0 || styleIdx === 1) {
                        // A1: Classic Dot Grid / A2: Round Dot Halftone
                        item = drawCircle(targetGroup, px, py, sz * 0.5, H);
                    } else if (styleIdx === 2) {
                        // A3: Square Dot Halftone
                        item = drawSquare(targetGroup, px, py, sz, cfg.rotation, H);
                    } else if (styleIdx === 3) {
                        // A4: Ellipse Halftone
                        item = drawEllipse(targetGroup, px, py, sz * 0.65, sz * 0.32, cfg.rotation, H);
                    } else if (styleIdx === 4) {
                        // A5: Diamond Halftone
                        item = drawRegularPolygon(targetGroup, px, py, sz * 0.6, 4, rotRad, H);
                    } else if (styleIdx === 8) {
                        // A9: Hexagonal Halftone
                        item = drawRegularPolygon(targetGroup, px, py, sz * 0.55, 6, rotRad + Math.PI / 6, H);
                    } else if (styleIdx === 9) {
                        // A10: Triangular Halftone (Alternating Up/Down Triangles)
                        var flip = ((Math.abs(r + c) % 2) === 1) ? Math.PI : 0;
                        item = drawRegularPolygon(targetGroup, px, py, sz * 0.6, 3, rotRad - Math.PI / 2 + flip, H);
                    }
                    finalizePath(item, px, py);
                });
            }
        }

        /* ====================================================================
         * FAMILY B: GRADIENT HALFTONE (Styles 10 - 19)
         * ==================================================================== */
        else if (styleIdx >= 10 && styleIdx <= 19) {
            iterateGrid(false, function (px, py, r, c, fade) {
                var nx = Math.max(0, Math.min(1, (px - margin) / Math.max(1, W - margin * 2)));
                var ny = Math.max(0, Math.min(1, (py - margin) / Math.max(1, H - margin * 2)));
                var dx = px - cx;
                var dy = py - cy;
                var distCenter = Math.min(1.0, Math.sqrt(dx * dx + dy * dy) / maxRadius);
                var t = 0.5;

                switch (styleIdx) {
                    case 10: // B1: Linear Gradient Dots
                        t = 1.0 - nx;
                        break;
                    case 11: // B2: Radial Gradient Dots
                        t = 1.0 - distCenter;
                        break;
                    case 12: // B3: Diagonal Gradient Dots
                        t = 1.0 - ((nx + ny) * 0.5);
                        break;
                    case 13: // B4: Multi-Color Gradient Halftone (Cosine Bands)
                        t = 0.5 + 0.5 * Math.cos((nx * 2.0 + ny) * Math.PI);
                        break;
                    case 14: // B5: Fade-Out Halftone (Smoothstep Edge Falloff)
                        var edgeD = Math.min(Math.min(nx, 1.0 - nx), Math.min(ny, 1.0 - ny)) * 2.0;
                        t = edgeD * edgeD * (3.0 - 2.0 * edgeD);
                        break;
                    case 15: // B6: Corner Fade Halftone (Distance from Top-Left Corner)
                        var dCorner = Math.sqrt(nx * nx + ny * ny) / 1.4142;
                        t = Math.max(0, 1.0 - dCorner);
                        break;
                    case 16: // B7: Center Glow Halftone (Gaussian Core)
                        t = Math.exp(-distCenter * distCenter * 3.5);
                        break;
                    case 17: // B8: Edge Density Halftone (Inverted Center, Heavy Perimeter)
                        t = Math.pow(distCenter, 1.35);
                        break;
                    case 18: // B9: Dual Gradient Halftone (Mirrored Bilateral)
                        t = 1.0 - Math.abs(nx - 0.5) * 2.0;
                        break;
                    case 19: // B10: Four-Corner Gradient Halftone (Bilinear Peak at Corners)
                        var cxDist = Math.abs(nx - 0.5) * 2.0;
                        var cyDist = Math.abs(ny - 0.5) * 2.0;
                        t = 0.25 + 0.75 * ((cxDist + cyDist) * 0.5);
                        break;
                }

                var sz = (minS + (maxS - minS) * Math.max(0.05, Math.min(1.0, t))) * fade;
                var dot = drawCircle(targetGroup, px, py, sz * 0.5, H);
                finalizePath(dot, px, py);
            });
        }

        /* ====================================================================
         * FAMILY C: WAVE & MESH (Styles 20 - 29)
         * ==================================================================== */
        else if (styleIdx >= 20 && styleIdx <= 29) {
            var amp = cfg.waveAmp * scaleMul;
            var freq = Math.max(0.5, cfg.waveFreq) * (Math.PI * 2.0) / Math.max(100, W);

            if (styleIdx === 24 || styleIdx === 28) {
                // C5: Sine Wave Grid (Continuous Polylines) & C9: Wavy Line Halftone
                var numWaveLines = Math.min(maxObjects, Math.ceil((H - margin * 2) / spY));
                var xSteps = 48;
                for (var wl = 0; wl <= numWaveLines; wl++) {
                    if (createdCount >= maxObjects) break;
                    var baseY = margin + wl * spY;
                    if (baseY > H - margin) break;
                    var wavePts = [];
                    for (var xs = 0; xs <= xSteps; xs++) {
                        var wx = margin + (xs / xSteps) * (W - margin * 2);
                        var phase = (styleIdx === 28) ? (wl * 0.35) : 0;
                        var wy = baseY + Math.sin(wx * freq + phase) * amp;
                        if (styleIdx === 28) {
                            wy += Math.cos(wx * freq * 0.5 - wl * 0.2) * (amp * 0.4);
                        }
                        if (wy >= margin && wy <= H - margin) {
                            wavePts.push([wx, wy]);
                        }
                    }
                    if (wavePts.length >= 2) {
                        var midW = wavePts[Math.floor(wavePts.length / 2)];
                        var strokeThick = (styleIdx === 28)
                            ? (minS + (maxS - minS) * (0.5 + 0.5 * Math.sin(wl * 0.4))) * 0.35
                            : Math.max(1, cfg.strokeWidth);
                        var pLine = drawPolygonPoints(targetGroup, wavePts, false, H);
                        var colW = computeColorForPoint(midW[0], midW[1], W, H, cx, cy, maxRadius, cfg, c1, c2, c3, c4);
                        applyItemStyle(pLine, colW, colW, false, true, strokeThick, cfg.opacity, blendEnum);
                        createdCount++;
                    }
                }
            } else {
                // Dot-based Wave & Mesh styles: C1, C2, C3, C4, C6, C7, C8, C10
                iterateGrid(false, function (px, py, r, c, fade) {
                    var dx = px - cx;
                    var dy = py - cy;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    var outX = px;
                    var outY = py;
                    var sizeMod = 0.5;

                    switch (styleIdx) {
                        case 20: // C1: Wave Halftone (Single Sine Displacement)
                            outY += Math.sin(px * freq) * amp;
                            sizeMod = 0.5 + 0.5 * Math.cos(px * freq);
                            break;
                        case 21: // C2: Double Wave Halftone (Harmonic Cross-Sine)
                            outX += Math.sin(py * freq) * (amp * 0.6);
                            outY += Math.sin(px * freq + py * freq * 0.5) * amp;
                            sizeMod = 0.5 + 0.5 * Math.sin(px * freq) * Math.cos(py * freq);
                            break;
                        case 22: // C3: Mesh Wave (2D Warped Pinch/Bulge)
                            var pinch = Math.sin(px * freq) * Math.sin(py * freq);
                            outX += Math.cos(py * freq) * amp * 0.7;
                            outY += Math.sin(px * freq) * amp * 0.7;
                            sizeMod = 0.5 + 0.5 * pinch;
                            break;
                        case 23: // C4: Flow Wave Dots (Oriented Streamline Ellipses)
                            var flowAng = Math.sin(px * freq * 0.8) + Math.cos(py * freq * 0.8);
                            outX += Math.cos(flowAng) * amp * 0.4;
                            outY += Math.sin(flowAng) * amp * 0.4;
                            sizeMod = 0.5 + 0.5 * Math.sin(flowAng);
                            if (outX >= margin && outX <= W - margin && outY >= margin && outY <= H - margin) {
                                var szF = (minS + (maxS - minS) * sizeMod) * fade;
                                var el = drawEllipse(targetGroup, outX, outY, szF * 0.75, szF * 0.28, (flowAng * 180 / Math.PI), H);
                                finalizePath(el, outX, outY);
                            }
                            return;
                        case 25: // C6: Ripple Wave (Damped Radial Sine)
                            var rip = Math.sin(dist * freq * 1.5 - cfg.spiralStr);
                            var damp = Math.exp(-dist / (maxRadius * 1.2));
                            outX += (dx / (dist + 1)) * rip * amp * damp;
                            outY += (dy / (dist + 1)) * rip * amp * damp;
                            sizeMod = 0.5 + 0.5 * rip * damp;
                            break;
                        case 26: // C7: Organic Wave Pattern (Smooth 2D Noise Approx)
                            var nVal = pseudoNoise2D(px * freq * 0.7, py * freq * 0.7, cfg.seed);
                            outX += (nVal - 0.5) * amp * 1.5;
                            outY += (pseudoNoise2D(py * freq * 0.7, px * freq * 0.7, cfg.seed + 99) - 0.5) * amp * 1.5;
                            sizeMod = nVal;
                            break;
                        case 27: // C8: Interference Wave (Two-Source Superposition Moire)
                            var s1x = cx - W * 0.2, s1y = cy;
                            var s2x = cx + W * 0.2, s2y = cy;
                            var d1 = Math.sqrt((px - s1x) * (px - s1x) + (py - s1y) * (py - s1y));
                            var d2 = Math.sqrt((px - s2x) * (px - s2x) + (py - s2y) * (py - s2y));
                            var waveSum = (Math.sin(d1 * freq * 1.4) + Math.sin(d2 * freq * 1.4)) * 0.5;
                            sizeMod = 0.5 + 0.5 * waveSum;
                            break;
                        case 29: // C10: Fluid Mesh Dots (Swirling Vortex Advection)
                            var swirl = Math.exp(-dist / (maxRadius * 0.7)) * cfg.spiralStr;
                            var sAng = Math.atan2(dy, dx) + swirl;
                            outX = cx + Math.cos(sAng) * dist + Math.sin(py * freq) * (amp * 0.3);
                            outY = cy + Math.sin(sAng) * dist + Math.cos(px * freq) * (amp * 0.3);
                            sizeMod = 0.5 + 0.5 * Math.sin(dist * freq - swirl);
                            break;
                    }

                    if (outX < margin || outX > W - margin || outY < margin || outY > H - margin) return;
                    var szW = (minS + (maxS - minS) * Math.max(0.05, Math.min(1.0, sizeMod))) * fade;
                    var dotW = drawCircle(targetGroup, outX, outY, szW * 0.5, H);
                    finalizePath(dotW, outX, outY);
                });
            }
        }

        /* ====================================================================
         * FAMILY D: RADIAL & SPIRAL (Styles 30 - 39)
         * ==================================================================== */
        else if (styleIdx >= 30 && styleIdx <= 39) {
            var spiralStrength = Math.max(0.2, cfg.spiralStr);

            if (styleIdx === 32 || styleIdx === 33) {
                // D3: Spiral Dots (Archimedean) & D4: Double Spiral (Opposing Arms)
                var arms = (styleIdx === 33) ? 2 : 1;
                var totalSpiralPts = Math.min(maxObjects, Math.floor((maxRadius / spX) * 28));
                var ptsPerArm = Math.floor(totalSpiralPts / arms);

                for (var arm = 0; arm < arms; arm++) {
                    var armOffset = arm * Math.PI;
                    for (var si = 1; si <= ptsPerArm; si++) {
                        if (createdCount >= maxObjects) break;
                        if (densityProb < 1.0 && rng.next() > densityProb) continue;
                        var progress = si / ptsPerArm;
                        var rDist = progress * maxRadius;
                        var theta = progress * spiralStrength * Math.PI * 6.0 + armOffset + rotRad;
                        var sx = cx + Math.cos(theta) * rDist;
                        var sy = cy + Math.sin(theta) * rDist;
                        if (sx < margin || sx > W - margin || sy < margin || sy > H - margin) continue;
                        var fadeS = computeEdgeFadeFactor(sx, sy, W, H, margin, cfg.edgeFade);
                        var szS = (minS + (maxS - minS) * (1.0 - progress * 0.7)) * fadeS;
                        var sDot = drawCircle(targetGroup, sx, sy, szS * 0.5, H);
                        finalizePath(sDot, sx, sy);
                    }
                }
            } else {
                // Polar Rings & Rays: D1, D2, D5, D6, D7, D8, D9, D10
                var ringCount = Math.max(4, Math.ceil(maxRadius / spY));
                var baseRays = Math.max(8, Math.floor((2 * Math.PI * spY * 2) / spX) * 2);
                if (styleIdx === 38) {
                    // D9: Mandala Symmetry enforces 12-fold or 16-fold symmetry
                    baseRays = 24;
                }

                for (var rIdx = 1; rIdx <= ringCount; rIdx++) {
                    if (createdCount >= maxObjects) break;
                    var rad = rIdx * spY;
                    var rNorm = Math.min(1.0, rad / maxRadius);
                    var raysThisRing = baseRays;

                    if (styleIdx === 31 || styleIdx === 35 || styleIdx === 39) {
                        // Scale ray count with circumference for even spacing
                        raysThisRing = Math.max(6, Math.floor((2 * Math.PI * rad) / spX));
                    }

                    for (var k = 0; k < raysThisRing; k++) {
                        if (createdCount >= maxObjects) break;
                        if (densityProb < 1.0 && rng.next() > densityProb) continue;

                        var baseTheta = (k / raysThisRing) * 2 * Math.PI + rotRad;
                        var theta = baseTheta;
                        var rx = cx;
                        var ry = cy;
                        var tSize = 1.0 - rNorm;

                        switch (styleIdx) {
                            case 30: // D1: Radial Burst (Straight Spoke Rays)
                                rx = cx + Math.cos(theta) * rad;
                                ry = cy + Math.sin(theta) * rad;
                                tSize = 1.0 - rNorm * 0.8;
                                break;
                            case 31: // D2: Concentric Rings (Evenly Spaced Ring Dots)
                                rx = cx + Math.cos(theta) * rad;
                                ry = cy + Math.sin(theta) * rad;
                                tSize = 0.5 + 0.5 * Math.cos(rNorm * Math.PI * cfg.waveFreq);
                                break;
                            case 34: // D5: Sunburst Halftone (Angular Wedges / Stretched Diamonds)
                                rx = cx + Math.cos(theta) * rad;
                                ry = cy + Math.sin(theta) * rad;
                                if (rx >= margin && rx <= W - margin && ry >= margin && ry <= H - margin) {
                                    var fadeSun = computeEdgeFadeFactor(rx, ry, W, H, margin, cfg.edgeFade);
                                    var szSun = (minS + (maxS - minS) * (1.0 - rNorm * 0.6)) * fadeSun;
                                    var wedge = drawEllipse(targetGroup, rx, ry, szSun * 0.85, szSun * 0.28, (theta * 180 / Math.PI), H);
                                    finalizePath(wedge, rx, ry);
                                }
                                continue;
                            case 35: // D6: Circular Ripple (Phase-Shifted Concentric Rings)
                                var rippleOff = Math.sin(baseTheta * Math.max(2, Math.round(cfg.waveFreq)) + rIdx * 0.5) * (cfg.waveAmp * 0.35);
                                rx = cx + Math.cos(theta) * (rad + rippleOff);
                                ry = cy + Math.sin(theta) * (rad + rippleOff);
                                tSize = 0.5 + 0.5 * Math.sin(rIdx * 0.6);
                                break;
                            case 36: // D7: Vortex Halftone (Logarithmic Angular Twist)
                                theta += Math.log(rIdx + 1) * spiralStrength * 0.8;
                                rx = cx + Math.cos(theta) * rad;
                                ry = cy + Math.sin(theta) * rad;
                                tSize = 1.0 - rNorm * 0.75;
                                break;
                            case 37: // D8: Orbit Dots (Keplerian Tilted Elliptical Orbits)
                                var tilt = (rIdx * 0.12) + rotRad;
                                var ex = Math.cos(baseTheta) * rad;
                                var ey = Math.sin(baseTheta) * (rad * 0.58);
                                rx = cx + (ex * Math.cos(tilt) - ey * Math.sin(tilt));
                                ry = cy + (ex * Math.sin(tilt) + ey * Math.cos(tilt));
                                tSize = 0.4 + 0.6 * (1.0 - rNorm);
                                break;
                            case 38: // D9: Mandala Dot Pattern (Dihedral Petal Symmetry)
                                var petals = Math.max(4, Math.round(cfg.waveFreq) * 2);
                                var petalMod = 0.5 + 0.5 * Math.cos(baseTheta * petals);
                                var mRad = rad + petalMod * (spY * 0.45);
                                rx = cx + Math.cos(theta) * mRad;
                                ry = cy + Math.sin(theta) * mRad;
                                tSize = petalMod * (1.0 - rNorm * 0.5);
                                break;
                            case 39: // D10: Radial Fade (Smooth Polar Power-Law Decay)
                                rx = cx + Math.cos(theta) * rad;
                                ry = cy + Math.sin(theta) * rad;
                                tSize = Math.pow(Math.max(0, 1.0 - rNorm), 1.8);
                                break;
                        }

                        if (rx < margin || rx > W - margin || ry < margin || ry > H - margin) continue;
                        var fadeR = computeEdgeFadeFactor(rx, ry, W, H, margin, cfg.edgeFade);
                        if (fadeR <= 0.01) continue;
                        var szR = (minS + (maxS - minS) * Math.max(0.05, Math.min(1.0, tSize))) * fadeR;
                        var rDot = drawCircle(targetGroup, rx, ry, szR * 0.5, H);
                        finalizePath(rDot, rx, ry);
                    }
                }
            }
        }

        /* ====================================================================
         * FAMILY E: FRACTAL & GEOMETRIC (Styles 40 - 49)
         * ==================================================================== */
        else if (styleIdx >= 40 && styleIdx <= 49) {
            var depth = Math.max(1, Math.min(7, Math.round(cfg.fractalDepth)));

            if (styleIdx === 41) {
                // E2: Fractal Branch Dots (Bounded Recursive Bifurcation Tree)
                var maxBranchDepth = Math.min(6, depth + 1);
                var baseLen = Math.min(W, H) * 0.22 * scaleMul;

                function spawnBranch(bx, by, len, angle, dRemaining) {
                    if (dRemaining <= 0 || createdCount >= maxObjects) return;
                    var steps = Math.max(3, Math.floor(len / (spX * 0.6)));
                    for (var s = 0; s <= steps; s++) {
                        if (createdCount >= maxObjects) break;
                        var tStep = s / steps;
                        var px = bx + Math.cos(angle) * (len * tStep);
                        var py = by + Math.sin(angle) * (len * tStep);
                        if (px >= margin && px <= W - margin && py >= margin && py <= H - margin) {
                            var fadeB = computeEdgeFadeFactor(px, py, W, H, margin, cfg.edgeFade);
                            var szB = (minS + (maxS - minS) * (dRemaining / maxBranchDepth) * (1.0 - tStep * 0.3)) * fadeB;
                            var bDot = drawCircle(targetGroup, px, py, szB * 0.5, H);
                            finalizePath(bDot, px, py);
                        }
                    }
                    var endX = bx + Math.cos(angle) * len;
                    var endY = by + Math.sin(angle) * len;
                    var spread = 0.45 + (cfg.spiralStr * 0.05);
                    spawnBranch(endX, endY, len * 0.72, angle - spread, dRemaining - 1);
                    spawnBranch(endX, endY, len * 0.72, angle + spread, dRemaining - 1);
                }

                // Spawn 4 symmetrical fractal trees from center
                for (var rootI = 0; rootI < 4; rootI++) {
                    var rootAng = rotRad + (rootI * Math.PI * 0.5);
                    spawnBranch(cx, cy, baseLen, rootAng, maxBranchDepth);
                }
            } else if (styleIdx === 43) {
                // E4: Random Dots (Pure Seeded PRNG Scatter)
                var scatterTarget = Math.min(maxObjects, Math.floor(((W - margin * 2) * (H - margin * 2)) / (spX * spY) * densityProb));
                for (var sc = 0; sc < scatterTarget; sc++) {
                    if (createdCount >= maxObjects) break;
                    var rx = rng.range(margin, W - margin);
                    var ry = rng.range(margin, H - margin);
                    var fadeSc = computeEdgeFadeFactor(rx, ry, W, H, margin, cfg.edgeFade);
                    var szSc = rng.range(minS, maxS) * fadeSc;
                    var scDot = drawCircle(targetGroup, rx, ry, szSc * 0.5, H);
                    finalizePath(scDot, rx, ry);
                }
            } else if (styleIdx === 45) {
                // E6: Voronoi-Inspired Pattern (Nearest-Seed Cellular Distance Field Approximation)
                var numSeeds = Math.max(8, Math.min(64, Math.round(cfg.waveFreq * 8)));
                var seeds = [];
                for (var ns = 0; ns < numSeeds; ns++) {
                    seeds.push({
                        x: rng.range(margin, W - margin),
                        y: rng.range(margin, H - margin)
                    });
                }
                iterateGrid(true, function (px, py, r, c, fade) {
                    var dMin1 = 999999, dMin2 = 999999;
                    for (var si = 0; si < seeds.length; si++) {
                        var dx = px - seeds[si].x;
                        var dy = py - seeds[si].y;
                        var d = Math.sqrt(dx * dx + dy * dy);
                        if (d < dMin1) {
                            dMin2 = dMin1;
                            dMin1 = d;
                        } else if (d < dMin2) {
                            dMin2 = d;
                        }
                    }
                    // Border proximity metric (F2 - F1) creates cellular Voronoi walls
                    var cellEdge = Math.min(1.0, (dMin2 - dMin1) / (spX * 2.5));
                    var szV = (minS + (maxS - minS) * (1.0 - cellEdge * 0.85)) * fade;
                    var vPoly = drawRegularPolygon(targetGroup, px, py, szV * 0.55, 6, rotRad, H);
                    finalizePath(vPoly, px, py);
                });
            } else if (styleIdx === 46) {
                // E7: Fibonacci Spiral Dots (Golden Angle 137.50776 degrees Phyllotaxis)
                var goldenAngle = Math.PI * (3.0 - Math.sqrt(5.0));
                var fibCount = Math.min(maxObjects, Math.floor((maxRadius * maxRadius) / (spX * spY * 0.45) * densityProb));
                for (var fi = 1; fi <= fibCount; fi++) {
                    if (createdCount >= maxObjects) break;
                    var rFib = maxRadius * Math.sqrt(fi / fibCount);
                    var thetaFib = fi * goldenAngle + rotRad;
                    var fx = cx + Math.cos(thetaFib) * rFib;
                    var fy = cy + Math.sin(thetaFib) * rFib;
                    if (fx < margin || fx > W - margin || fy < margin || fy > H - margin) continue;
                    var fadeFib = computeEdgeFadeFactor(fx, fy, W, H, margin, cfg.edgeFade);
                    var tFib = 1.0 - (rFib / maxRadius) * 0.65;
                    var szFib = (minS + (maxS - minS) * tFib) * fadeFib;
                    var fibDot = drawCircle(targetGroup, fx, fy, szFib * 0.5, H);
                    finalizePath(fibDot, fx, fy);
                }
            } else {
                // Grid-based Fractal & Geometric Styles: E1 (40), E3 (42), E5 (44), E8 (47), E9 (48), E10 (49)
                var freqBase = Math.max(0.5, cfg.waveFreq) * (Math.PI * 2.0) / Math.max(100, W);

                iterateGrid(false, function (px, py, r, c, fade) {
                    var dx = px - cx;
                    var dy = py - cy;
                    var dist = Math.sqrt(dx * dx + dy * dy);

                    if (styleIdx === 40) {
                        // E1: Fractal Ripple (Multi-Octave Radial Sine Summation)
                        var sum = 0, ampSum = 0, octAmp = 1.0, octFreq = freqBase;
                        for (var o = 0; o < depth; o++) {
                            sum += Math.sin(dist * octFreq) * octAmp;
                            ampSum += octAmp;
                            octAmp *= 0.5;
                            octFreq *= 2.0;
                        }
                        var tF1 = 0.5 + 0.5 * (sum / ampSum);
                        var szF1 = (minS + (maxS - minS) * tF1) * fade;
                        var dF1 = drawCircle(targetGroup, px, py, szF1 * 0.5, H);
                        finalizePath(dF1, px, py);
                    } else if (styleIdx === 42) {
                        // E3: Geometric Halftone (Alternating polygons by modulo ring)
                        var sides = 3 + (Math.abs(r + c) % 4); // Triangle, Square, Pentagon, Hexagon
                        var tG = 1.0 - Math.min(1.0, dist / maxRadius) * 0.7;
                        var szG = (minS + (maxS - minS) * tG) * fade;
                        var gItem = drawRegularPolygon(targetGroup, px, py, szG * 0.55, sides, rotRad, H);
                        finalizePath(gItem, px, py);
                    } else if (styleIdx === 44) {
                        // E5: Organic Scatter (Stratified Jittered Poisson-like Grid)
                        var jx = px + (rng.next() - 0.5) * spX * 0.75;
                        var jy = py + (rng.next() - 0.5) * spY * 0.75;
                        if (jx < margin || jx > W - margin || jy < margin || jy > H - margin) return;
                        var nOrg = pseudoNoise2D(jx * freqBase, jy * freqBase, cfg.seed);
                        var szOrg = (minS + (maxS - minS) * nOrg) * fade;
                        var oDot = drawCircle(targetGroup, jx, jy, szOrg * 0.5, H);
                        finalizePath(oDot, jx, jy);
                    } else if (styleIdx === 47) {
                        // E8: Fractal Wave (Weierstrass Multi-Harmonic Summation)
                        var wSum = 0, wMax = 0, aPow = 1.0, bPow = 1.0;
                        for (var k = 0; k < depth; k++) {
                            wSum += aPow * Math.cos(bPow * (px * freqBase + py * freqBase * 0.5));
                            wMax += aPow;
                            aPow *= 0.55;
                            bPow *= 2.1;
                        }
                        var wyOff = (wSum / wMax) * cfg.waveAmp * scaleMul;
                        var finalY = py + wyOff;
                        if (finalY < margin || finalY > H - margin) return;
                        var tW = 0.5 + 0.5 * (wSum / wMax);
                        var szFW = (minS + (maxS - minS) * tW) * fade;
                        var fwDot = drawCircle(targetGroup, px, finalY, szFW * 0.5, H);
                        finalizePath(fwDot, px, finalY);
                    } else if (styleIdx === 48) {
                        // E9: Geometric Mosaic (Truchet-Inspired Diagonal Wedge Tiles)
                        var orient = rng.next() > 0.5 ? 0 : 1;
                        var sMos = Math.min(spX, spY) * 0.44 * fade;
                        var triPts;
                        if (orient === 0) {
                            triPts = [[px - sMos, py - sMos], [px + sMos, py - sMos], [px - sMos, py + sMos]];
                        } else {
                            triPts = [[px + sMos, py - sMos], [px + sMos, py + sMos], [px - sMos, py + sMos]];
                        }
                        var mosItem = drawPolygonPoints(targetGroup, triPts, true, H);
                        finalizePath(mosItem, px, py);
                    } else if (styleIdx === 49) {
                        // E10: Cellular Dot Pattern (Turing Reaction-Diffusion Approximation)
                        var activator = Math.sin(px * freqBase * 1.2) * Math.cos(py * freqBase * 1.2);
                        var inhibitor = Math.sin(px * freqBase * 0.45 + 1.2) * Math.cos(py * freqBase * 0.45 - 0.8);
                        var turing = 0.5 + 0.5 * Math.sin((activator - inhibitor) * Math.PI);
                        var szTur = (minS + (maxS - minS) * turing) * fade;
                        var turDot = drawCircle(targetGroup, px, py, szTur * 0.5, H);
                        finalizePath(turDot, px, py);
                    }
                });
            }
        }

        return createdCount;
    }

    /**
     * Creates a new Adobe Illustrator document with all requested layers,
     * optional background, optional placed source image (Mode B), vector pattern group,
     * and optional artboard clipping mask.
     */

// MODULE 8: CREATIVE ENGINE A — HALFTONE LAB (20 ALGORITHMS)
    // ========================================================================
    function runEngineHalftoneLab(targetGroup, cfg, rng, paletteRGB) {
        var W = cfg.widthPts, H = cfg.heightPts, margin = cfg.marginPts;
        var scaleMul = cfg.scale / 100.0;
        var spX = Math.max(4, cfg.spacingXPts * scaleMul);
        var spY = Math.max(4, cfg.spacingYPts * scaleMul);
        var minS = Math.max(0.5, cfg.minSizePts * scaleMul);
        var maxS = Math.max(minS + 0.5, cfg.maxSizePts * scaleMul);
        var rotRad = (cfg.rotation * Math.PI) / 180.0;
        var cosR = Math.cos(rotRad), sinR = Math.sin(rotRad);
        var cx = W * (cfg.centerX / 100.0);
        var cy = H * (cfg.centerY / 100.0);
        var usableW = Math.max(1, W - margin * 2);
        var usableH = Math.max(1, H - margin * 2);
        // True isotropic radius from center to usable boundary so circles stay 1:1 on non-square artboards
        var maxR = Math.max(1, Math.min(usableW, usableH) * 0.5);
        var densityProb = cfg.density / 100.0;
        var blendEnum = resolveBlendMode(cfg.blendMode);
        var style = cfg.halftoneStyle; // 0..19

        // A08 (Line Halftone) & A09 (Cross-Line Halftone)
        if (style === 7 || style === 8) {
            var passes = (style === 8) ? 2 : 1;
            var diag = Math.sqrt(usableW * usableW + usableH * usableH);
            var halfLines = Math.floor((diag * 0.5) / spY);
            for (var p = 0; p < passes; p++) {
                var ang = rotRad + (p === 1 ? Math.PI * 0.5 : 0);
                var cA = Math.cos(ang), sA = Math.sin(ang);
                for (var li = -halfLines; li <= halfLines; li++) {
                    if (!ExecutionController.canContinue()) break;
                    var ly = li * spY;
                    var segs = [];
                    var steps = 32;
                    for (var s = -steps; s <= steps; s++) {
                        var lx = (s / steps) * (diag * 0.55);
                        var wx = cx + (lx * cA - ly * sA);
                        var wy = cy + (lx * sA + ly * cA);
                        if (wx >= margin - 0.01 && wx <= W - margin + 0.01 && wy >= margin - 0.01 && wy <= H - margin + 0.01) {
                            segs.push([wx, wy]);
                        }
                    }
                    if (segs.length >= 2) {
                        var mid = segs[Math.floor(segs.length / 2)];
                        var dN = Math.min(1, Math.sqrt((mid[0] - cx) * (mid[0] - cx) + (mid[1] - cy) * (mid[1] - cy)) / maxR);
                        var sw = minS + (maxS - minS) * (1.0 - dN) * 0.4;
                        var pItem = createPolylineItem(targetGroup, segs, false, H);
                        var col = evaluatePaletteColor(mid[0], mid[1], W, H, cx, cy, maxR, cfg, paletteRGB);
                        styleVectorItem(pItem, col, false, true, sw, cfg.opacity, blendEnum);
                    }
                }
            }
            return;
        }

        // A15 (Spiral Halftone), A16 (Radial Burst Halftone), A17 (Concentric Ring Halftone)
        if (style === 14 || style === 15 || style === 16) {
            if (style === 14) {
                var totalSpiral = Math.min(cfg.maxObjects, Math.floor((maxR / spX) * 32));
                // Use cfg.spiralStr with a safe fallback in case it's missing (e.g. loaded from older preset)
                var spiralStr = Math.max(0.5, parseFloat(cfg.spiralStr) || 3.0);
                for (var si = 1; si <= totalSpiral; si++) {
                    if (!ExecutionController.canContinue()) break;
                    if (densityProb < 1.0 && rng.next() > densityProb) continue;
                    var prog = si / totalSpiral;
                    var rDist = prog * maxR;
                    var theta = prog * spiralStr * Math.PI * 7.0 + rotRad;
                    var sx = cx + Math.cos(theta) * rDist;
                    var sy = cy + Math.sin(theta) * rDist;
                    if (sx < margin - 0.01 || sx > W - margin + 0.01 || sy < margin - 0.01 || sy > H - margin + 0.01) continue;
                    var fade = computeEdgeFade(sx, sy, W, H, margin, cfg.edgeExclusion);
                    var sz = (minS + (maxS - minS) * (1.0 - prog * 0.75)) * fade;
                    var dot = createCircleItem(targetGroup, sx, sy, sz * 0.5, H);
                    var colS = evaluatePaletteColor(sx, sy, W, H, cx, cy, maxR, cfg, paletteRGB, prog);
                    styleVectorItem(dot, colS, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            } else {
                var rings = Math.max(4, Math.floor(maxR / spY));
                // Place exact center anchor dot so concentric rings are perfectly balanced
                var centerDot = createCircleItem(targetGroup, cx, cy, maxS * 0.5, H);
                styleVectorItem(centerDot, evaluatePaletteColor(cx, cy, W, H, cx, cy, maxR, cfg, paletteRGB, 0), cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                for (var ri = 1; ri <= rings; ri++) {
                    if (!ExecutionController.canContinue()) break;
                    var rad = ri * spY;
                    var rNorm = Math.min(1, rad / maxR);
                    var spokes = (style === 15) ? Math.max(12, Math.round(cfg.symmetry * 4)) : Math.max(6, Math.round((2 * Math.PI * rad) / spX));
                    for (var k = 0; k < spokes; k++) {
                        if (!ExecutionController.canContinue()) break;
                        if (densityProb < 1.0 && rng.next() > densityProb) continue;
                        var angR = (k / spokes) * 2 * Math.PI + rotRad;
                        var px = cx + Math.cos(angR) * rad;
                        var py = cy + Math.sin(angR) * rad;
                        if (px < margin - 0.01 || px > W - margin + 0.01 || py < margin - 0.01 || py > H - margin + 0.01) continue;
                        var fadeR = computeEdgeFade(px, py, W, H, margin, cfg.edgeExclusion);
                        var szR = (minS + (maxS - minS) * (1.0 - rNorm * 0.8)) * fadeR;
                        var itemR = (style === 15)
                            ? createEllipseItem(targetGroup, px, py, szR * 0.75, szR * 0.3, (angR * 180 / Math.PI), H)
                            : createCircleItem(targetGroup, px, py, szR * 0.5, H);
                        var colR = evaluatePaletteColor(px, py, W, H, cx, cy, maxR, cfg, paletteRGB, rNorm);
                        styleVectorItem(itemR, colR, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                    }
                }
            }
            return;
        }

        // Grid-based Halftones: A01..A07, A10..A14, A18..A20
        var isHexGrid = (style === 5 || style === 6);
        var rowPitch = isHexGrid ? (spY * 0.86602540378) : spY;
        var isAxisAligned = (Math.abs(cfg.rotation % 360) < 0.01);

        // Symmetric step calculation from center (cx, cy) so left/right and top/bottom margins match 100%
        var halfC, halfR;
        if (isAxisAligned) {
            halfC = Math.floor((usableW * 0.5 + 0.001) / spX);
            halfR = Math.floor((usableH * 0.5 + 0.001) / rowPitch);
        } else {
            var diagSpan = Math.sqrt(usableW * usableW + usableH * usableH);
            halfC = Math.ceil((diagSpan * 0.5) / spX) + 1;
            halfR = Math.ceil((diagSpan * 0.5) / rowPitch) + 1;
        }

        var waveFreq = Math.max(0.5, cfg.waveFreq) * (Math.PI * 2.0) / Math.max(100, Math.min(usableW, usableH));
        var waveAmp = cfg.waveAmp * scaleMul;

        for (var r = -halfR; r <= halfR; r++) {
            if (!ExecutionController.canContinue()) break;
            for (var c = -halfC; c <= halfC; c++) {
                if (!ExecutionController.canContinue()) break;
                if (densityProb < 1.0 && rng.next() > densityProb) continue;

                // Symmetric odd-row offset for hexagonal/triangular grids so average X remains centered
                var hexShift = 0;
                if (isHexGrid) {
                    hexShift = (Math.abs(r) % 2 === 1) ? (spX * 0.25) : (-spX * 0.25);
                }
                var gx = c * spX + hexShift;
                var gy = r * rowPitch;
                var px = cx + (gx * cosR - gy * sinR);
                var py = cy + (gx * sinR + gy * cosR);

                if (style === 12) {
                    // A13: Wave Halftone
                    py += Math.sin(gx * waveFreq + cfg.wavePhase) * waveAmp;
                } else if (style === 13) {
                    // A14: Double-Wave Halftone
                    px += Math.sin(gy * waveFreq) * (waveAmp * 0.5);
                    py += Math.sin(gx * waveFreq + gy * waveFreq * 0.5) * waveAmp;
                } else if (style === 19) {
                    // A20: Organic Scatter Halftone
                    px += (rng.next() - 0.5) * spX * 0.85;
                    py += (rng.next() - 0.5) * spY * 0.85;
                }

                if (px < margin - 0.01 || px > W - margin + 0.01 || py < margin - 0.01 || py > H - margin + 0.01) continue;
                var fade = computeEdgeFade(px, py, W, H, margin, cfg.edgeExclusion);
                if (fade <= 0.01) continue;

                var nx = Math.max(0, Math.min(1, (px - margin) / usableW));
                var ny = Math.max(0, Math.min(1, (py - margin) / usableH));
                // Isotropic distance normalized by maxR so circular gradients stay round on 16:9 artboards
                var dNorm = Math.min(1, Math.sqrt((px - cx) * (px - cx) + (py - cy) * (py - cy)) / maxR);
                var tSize = 0.6;

                switch (style) {
                    case 0: tSize = 0.65; break; // A01: Uniform Classic Dot Grid
                    case 1: tSize = 1.0 - dNorm; break; // A02: Variable-Size Halftone
                    case 9: tSize = 1.0 - nx; break; // A10: Linear Gradient Halftone
                    case 10: tSize = 1.0 - dNorm; break; // A11: Radial Gradient Halftone
                    case 11: // A12: Four-Corner Color Halftone
                        tSize = 0.25 + 0.75 * ((Math.abs(nx - 0.5) * 2 + Math.abs(ny - 0.5) * 2) * 0.5);
                        break;
                    case 12: tSize = 0.5 + 0.5 * Math.cos(gx * waveFreq); break;
                    case 13: tSize = 0.5 + 0.5 * Math.sin(gx * waveFreq) * Math.cos(gy * waveFreq); break;
                    case 17: tSize = 1.0 - ((nx + ny) * 0.5); break; // A18: Diagonal Halftone
                    case 18: // A19: Fade-Out Halftone
                        var eDist = Math.min(Math.min(nx, 1.0 - nx), Math.min(ny, 1.0 - ny)) * 2.0;
                        tSize = eDist * eDist * (3.0 - 2.0 * eDist);
                        break;
                    case 19: tSize = fieldNoise2D(px * waveFreq, py * waveFreq, cfg.seed); break;
                    default: tSize = 1.0 - dNorm * 0.85; break;
                }

                // Clamp maximum size to cell spacing so dots maintain crisp halftone ratio without unintended overlap
                var safeMaxS = Math.min(maxS, Math.min(spX, spY) * 1.05);
                var sz = Math.max(0.5, (minS + (Math.max(minS, safeMaxS) - minS) * Math.max(0.05, Math.min(1, tSize))) * fade);
                var shape = null;
                if (style === 2) {
                    shape = createRectItem(targetGroup, px, py, sz, sz, cfg.rotation, H);
                } else if (style === 3) {
                    shape = createEllipseItem(targetGroup, px, py, sz * 0.65, sz * 0.35, cfg.rotation, H);
                } else if (style === 4) {
                    shape = createRegularPolygonItem(targetGroup, px, py, sz * 0.5 * 1.41421356, 4, rotRad + Math.PI * 0.25, H);
                } else if (style === 5) {
                    shape = createRegularPolygonItem(targetGroup, px, py, sz * 0.55, 6, rotRad + Math.PI / 6, H);
                } else if (style === 6) {
                    var flip = ((Math.abs(r + c) % 2) === 1) ? Math.PI : 0;
                    shape = createRegularPolygonItem(targetGroup, px, py, sz * 0.58, 3, rotRad - Math.PI / 2 + flip, H);
                } else {
                    shape = createCircleItem(targetGroup, px, py, sz * 0.5, H);
                }

                var colG = evaluatePaletteColor(px, py, W, H, cx, cy, maxR, cfg, paletteRGB, tSize);
                styleVectorItem(shape, colG, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
    }

    // ========================================================================

    // ========================================================================
    // MODULE 9: CREATIVE ENGINE 2 — FRACTAL & MATHEMATICAL ART (10 STYLES)
    // ========================================================================
// ========================================================================
    function runEngineFractalArt(targetGroup, cfg, rng, paletteRGB) {
        var W = cfg.widthPts, H = cfg.heightPts, margin = cfg.marginPts;
        var cx = W * (cfg.centerX / 100.0);
        var cy = H * (cfg.centerY / 100.0);
        var maxR = Math.min(W, H) * 0.44 * (cfg.scale / 100.0);
        var depth = Math.max(1, Math.min(7, cfg.fractalDepth));
        var branchCnt = Math.max(2, Math.min(5, cfg.branchCount));
        var branchAngRad = (cfg.branchAngle * Math.PI) / 180.0;
        var decay = clampNum(cfg.lengthDecay, 40, 88, 72) / 100.0;
        var rotRad = (cfg.rotation * Math.PI) / 180.0;
        var blendEnum = resolveBlendMode(cfg.blendMode);
        var style = cfg.fractalStyle; // 0..9

        // B01 (Recursive Branch), B02 (Binary Tree), B03 (Radial Branch Fractal)
        if (style === 0 || style === 1 || style === 2) {
            // Iterative queue-based BFS generation to eliminate call-stack overflow risk
            var queue = [];
            var roots = (style === 2) ? Math.max(3, Math.min(16, cfg.symmetry)) : 1;
            var startLen = maxR * (style === 2 ? 0.38 : 0.46);
            for (var r = 0; r < roots; r++) {
                var rAng = (style === 2)
                    ? (rotRad + (r * 2 * Math.PI / roots))
                    : (-Math.PI * 0.5 + rotRad);
                // Bug fix: startX was always cx regardless of style; now correctly uses cx for radial root
                // and cx for upward tree (both are cx, but startY differs correctly by style)
                var startX = cx;
                var startY = (style === 2) ? cy : (H - margin - 40);
                queue.push({ x: startX, y: startY, len: startLen, ang: rAng, lvl: 0 });
            }

            var effBranches = (style === 1) ? 2 : branchCnt;
            while (queue.length > 0 && ExecutionController.canContinue()) {
                var node = queue.shift();
                var nx = node.x + Math.cos(node.ang) * node.len;
                var ny = node.y + Math.sin(node.ang) * node.len;

                var seg = createPolylineItem(targetGroup, [[node.x, node.y], [nx, ny]], false, H);
                var tProg = node.lvl / Math.max(1, depth);
                var col = evaluatePaletteColor(nx, ny, W, H, cx, cy, maxR, cfg, paletteRGB, tProg);
                var sw = Math.max(0.4, cfg.strokeWidth * Math.pow(decay, node.lvl * 0.7));
                styleVectorItem(seg, col, false, true, sw, cfg.opacity, blendEnum);

                if (cfg.useFill && node.lvl === depth) {
                    var tipDot = createCircleItem(targetGroup, nx, ny, Math.max(1.5, cfg.minSizePts), H);
                    styleVectorItem(tipDot, col, true, false, 0, cfg.opacity, blendEnum);
                }

                if (node.lvl < depth && node.len > 2.0) {
                    for (var b = 0; b < effBranches; b++) {
                        var frac = (effBranches === 1) ? 0 : ((b / (effBranches - 1)) - 0.5) * 2.0;
                        var jitter = (style === 0) ? (rng.next() - 0.5) * 0.12 : 0;
                        var nextAng = node.ang + frac * branchAngRad + jitter;
                        queue.push({
                            x: nx,
                            y: ny,
                            len: node.len * decay,
                            ang: nextAng,
                            lvl: node.lvl + 1
                        });
                    }
                }
            }
        }
        // B04: Spiral Recursion
        else if (style === 3) {
            var arms = Math.max(2, Math.min(12, cfg.symmetry));
            var stepsPerArm = Math.min(180, depth * 28);
            for (var a = 0; a < arms; a++) {
                var baseAng = rotRad + (a * 2 * Math.PI / arms);
                var curR = maxR * 0.95;
                var curAng = baseAng;
                for (var s = 0; s < stepsPerArm; s++) {
                    if (!ExecutionController.canContinue()) break;
                    var progS = s / stepsPerArm;
                    var px = cx + Math.cos(curAng) * curR;
                    var py = cy + Math.sin(curAng) * curR;
                    var sz = Math.max(1.0, cfg.maxSizePts * (1.0 - progS * 0.85) * 0.45);
                    var poly = createRegularPolygonItem(targetGroup, px, py, sz, Math.max(3, cfg.geoVertices), curAng, H);
                    var colSp = evaluatePaletteColor(px, py, W, H, cx, cy, maxR, cfg, paletteRGB, progS);
                    styleVectorItem(poly, colSp, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                    curR *= 0.978;
                    curAng += 0.14 * (cfg.spiralStr / 3.0);
                    if (curR < 2) break;
                }
            }
        }
        // B05: Fibonacci-Inspired Spiral (Golden Angle 137.50776 deg Phyllotaxis)
        else if (style === 4) {
            var goldenAngle = Math.PI * (3.0 - Math.sqrt(5.0));
            var countFib = Math.min(cfg.maxObjects, depth * 180);
            for (var fi = 1; fi <= countFib; fi++) {
                if (!ExecutionController.canContinue()) break;
                var normF = fi / countFib;
                var rFib = maxR * Math.sqrt(normF);
                var thetaFib = fi * goldenAngle + rotRad;
                var fx = cx + Math.cos(thetaFib) * rFib;
                var fy = cy + Math.sin(thetaFib) * rFib;
                if (fx < margin || fx > W - margin || fy < margin || fy > H - margin) continue;
                var szF = cfg.minSizePts + (cfg.maxSizePts - cfg.minSizePts) * (1.0 - normF * 0.65);
                var itemF = createCircleItem(targetGroup, fx, fy, szF * 0.45, H);
                var colF = evaluatePaletteColor(fx, fy, W, H, cx, cy, maxR, cfg, paletteRGB, normF);
                styleVectorItem(itemF, colF, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
        // B06: Fractal Ripple (Multi-Octave Radial Sine)
        else if (style === 5) {
            var rings = Math.min(80, depth * 12);
            var ptsOnRing = 72;
            for (var ri = 1; ri <= rings; ri++) {
                if (!ExecutionController.canContinue()) break;
                var baseR = (ri / rings) * maxR;
                var ringPts = [];
                for (var pi = 0; pi < ptsOnRing; pi++) {
                    var theta = (pi / ptsOnRing) * 2 * Math.PI + rotRad;
                    var octSum = 0, octAmp = 1.0, octFreq = Math.max(2, cfg.symmetry);
                    for (var o = 0; o < depth; o++) {
                        octSum += Math.sin(theta * octFreq + ri * 0.35) * octAmp;
                        octAmp *= 0.5;
                        octFreq *= 2;
                    }
                    var rMod = baseR + octSum * (cfg.waveAmp * 0.35);
                    ringPts.push([cx + Math.cos(theta) * rMod, cy + Math.sin(theta) * rMod]);
                }
                var rPath = createSmoothBezierPath(targetGroup, ringPts, true, cfg.curveSmooth, H);
                var colRip = evaluatePaletteColor(cx + baseR, cy, W, H, cx, cy, maxR, cfg, paletteRGB, ri / rings);
                styleVectorItem(rPath, colRip, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
        // B07: Nested Polygon Fractal
        else if (style === 6) {
            var sides = Math.max(3, Math.min(12, cfg.geoVertices));
            var totalNested = depth * 9;
            var curRadius = maxR;
            var curAngle = rotRad;
            var stepAngle = (cfg.branchAngle * Math.PI) / 180.0 * 0.25;
            for (var ni = 0; ni < totalNested; ni++) {
                if (!ExecutionController.canContinue() || curRadius < 3) break;
                var nPoly = createRegularPolygonItem(targetGroup, cx, cy, curRadius, sides, curAngle, H);
                var colN = evaluatePaletteColor(cx, cy, W, H, cx, cy, maxR, cfg, paletteRGB, ni / totalNested);
                styleVectorItem(nPoly, colN, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
                curRadius *= Math.pow(decay, 0.28);
                curAngle += stepAngle;
            }
        }
        // B08: Sierpinski-Style Triangle (Iterative Queue Subdivision)
        else if (style === 7) {
            var sDepth = Math.min(6, depth);
            var hTri = maxR * 1.65;
            var pTop = [cx, cy - hTri * 0.58];
            var pLeft = [cx - hTri * 0.58, cy + hTri * 0.42];
            var pRight = [cx + hTri * 0.58, cy + hTri * 0.42];
            var triQueue = [{ a: pTop, b: pLeft, c: pRight, lvl: 0 }];

            while (triQueue.length > 0 && ExecutionController.canContinue()) {
                var tNode = triQueue.shift();
                if (tNode.lvl >= sDepth) {
                    var triItem = createPolylineItem(targetGroup, [tNode.a, tNode.b, tNode.c], true, H);
                    var midX = (tNode.a[0] + tNode.b[0] + tNode.c[0]) / 3.0;
                    var midY = (tNode.a[1] + tNode.b[1] + tNode.c[1]) / 3.0;
                    var colT = evaluatePaletteColor(midX, midY, W, H, cx, cy, maxR, cfg, paletteRGB);
                    styleVectorItem(triItem, colT, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                } else {
                    var ab = [(tNode.a[0] + tNode.b[0]) * 0.5, (tNode.a[1] + tNode.b[1]) * 0.5];
                    var bc = [(tNode.b[0] + tNode.c[0]) * 0.5, (tNode.b[1] + tNode.c[1]) * 0.5];
                    var ca = [(tNode.c[0] + tNode.a[0]) * 0.5, (tNode.c[1] + tNode.a[1]) * 0.5];
                    triQueue.push({ a: tNode.a, b: ab, c: ca, lvl: tNode.lvl + 1 });
                    triQueue.push({ a: ab, b: tNode.b, c: bc, lvl: tNode.lvl + 1 });
                    triQueue.push({ a: ca, b: bc, c: tNode.c, lvl: tNode.lvl + 1 });
                }
            }
        }
        // B09: Koch-Inspired Line Snowflake (Iterative Segment Refinement)
        else if (style === 8) {
            var kDepth = Math.min(4, depth); // Cap at 4 (3 * 4^4 = 768 vertices per ring)
            var ringsKoch = Math.max(1, Math.min(5, Math.round(cfg.branchCount)));
            for (var rk = 0; rk < ringsKoch; rk++) {
                if (!ExecutionController.canContinue()) break;
                var radK = maxR * (1.0 - rk * 0.2);
                var kPts = [];
                for (var v = 0; v < 3; v++) {
                    var aK = rotRad - Math.PI / 2 + (v * 2 * Math.PI / 3);
                    kPts.push([cx + Math.cos(aK) * radK, cy + Math.sin(aK) * radK]);
                }
                for (var iter = 0; iter < kDepth; iter++) {
                    var nextPts = [];
                    for (var i = 0; i < kPts.length; i++) {
                        var p1 = kPts[i];
                        var p2 = kPts[(i + 1) % kPts.length];
                        var dx = p2[0] - p1[0], dy = p2[1] - p1[1];
                        var pA = [p1[0] + dx / 3.0, p1[1] + dy / 3.0];
                        var pB = [p1[0] + dx * 2.0 / 3.0, p1[1] + dy * 2.0 / 3.0];
                        var cos60 = 0.5, sin60 = -0.8660254;
                        var vx = pB[0] - pA[0], vy = pB[1] - pA[1];
                        var pPeak = [pA[0] + (vx * cos60 - vy * sin60), pA[1] + (vx * sin60 + vy * cos60)];
                        nextPts.push(p1, pA, pPeak, pB);
                    }
                    kPts = nextPts;
                }
                var kochItem = createPolylineItem(targetGroup, kPts, true, H);
                var colK = evaluatePaletteColor(cx, cy, W, H, cx, cy, maxR, cfg, paletteRGB, rk / Math.max(1, ringsKoch));
                styleVectorItem(kochItem, colK, cfg.useFill, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
        // B10: Geometric Fractal Mosaic (Iterative Quadtree Subdivision)
        else if (style === 9) {
            var qDepth = Math.min(6, depth);
            var boxSize = Math.min(W, H) - margin * 2;
            var qQueue = [{ x: cx - boxSize * 0.5, y: cy - boxSize * 0.5, w: boxSize, h: boxSize, lvl: 0 }];

            while (qQueue.length > 0 && ExecutionController.canContinue()) {
                var cell = qQueue.shift();
                var subdivide = (cell.lvl < qDepth) && (cell.lvl < 2 || rng.next() < (decay * 0.95));
                if (subdivide && cell.w > 8) {
                    var hw = cell.w * 0.5, hh = cell.h * 0.5;
                    qQueue.push({ x: cell.x, y: cell.y, w: hw, h: hh, lvl: cell.lvl + 1 });
                    qQueue.push({ x: cell.x + hw, y: cell.y, w: hw, h: hh, lvl: cell.lvl + 1 });
                    qQueue.push({ x: cell.x, y: cell.y + hh, w: hw, h: hh, lvl: cell.lvl + 1 });
                    qQueue.push({ x: cell.x + hw, y: cell.y + hh, w: hw, h: hh, lvl: cell.lvl + 1 });
                } else {
                    var qCx = cell.x + cell.w * 0.5;
                    var qCy = cell.y + cell.h * 0.5;
                    var pad = Math.max(1, cell.w * 0.08);
                    var rItem = createRectItem(targetGroup, qCx, qCy, cell.w - pad, cell.h - pad, 0, H);
                    var colQ = evaluatePaletteColor(qCx, qCy, W, H, cx, cy, maxR, cfg, paletteRGB, cell.lvl / qDepth);
                    styleVectorItem(rItem, colQ, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
    }

    // ========================================================================

    // ========================================================================
    // MODULE 10: CREATIVE ENGINE 3 — MESH WAVE & FLOW FIELDS (10 STYLES)
    // ========================================================================
// ========================================================================
    function runEngineMeshWaveStudio(targetGroup, cfg, rng, paletteRGB) {
        var W = cfg.widthPts, H = cfg.heightPts, margin = cfg.marginPts;
        var cx = W * (cfg.centerX / 100.0);
        var cy = H * (cfg.centerY / 100.0);
        var maxR = Math.sqrt(W * W + H * H) * 0.55;
        var scaleMul = cfg.scale / 100.0;
        var amp = cfg.waveAmp * scaleMul;
        var freq = Math.max(0.5, cfg.waveFreq) * (Math.PI * 2.0) / Math.max(100, W);
        var phaseRad = (cfg.wavePhase * Math.PI) / 180.0;
        var lineCount = Math.max(4, Math.min(250, cfg.waveLines));
        var smooth = cfg.curveSmooth;
        var rotRad = (cfg.rotation * Math.PI) / 180.0;
        var cosR = Math.cos(rotRad), sinR = Math.sin(rotRad);
        var blendEnum = resolveBlendMode(cfg.blendMode);
        var style = cfg.waveStyle; // 0..9

        // C04 (Mesh Wave Dots) & C06 (Ripple Field Dots)
        if (style === 3 || style === 5) {
            var spX = Math.max(6, cfg.spacingXPts * scaleMul);
            var spY = Math.max(6, cfg.spacingYPts * scaleMul);
            var cols = Math.ceil((W - margin * 2) / spX);
            var rows = Math.ceil((H - margin * 2) / spY);
            for (var r = 0; r <= rows; r++) {
                if (!ExecutionController.canContinue()) break;
                for (var c = 0; c <= cols; c++) {
                    if (!ExecutionController.canContinue()) break;
                    var bx = margin + c * spX;
                    var by = margin + r * spY;
                    var dx = bx - cx, dy = by - cy;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    var ox = bx, oy = by, szMod = 0.5;

                    if (style === 3) {
                        ox += Math.cos(by * freq + phaseRad) * amp * 0.6;
                        oy += Math.sin(bx * freq + phaseRad) * amp * 0.6;
                        szMod = 0.5 + 0.5 * Math.sin(bx * freq) * Math.cos(by * freq);
                    } else {
                        var rip = Math.sin(dist * freq * 1.6 - phaseRad);
                        var damp = Math.exp(-dist / (maxR * 1.1));
                        ox += (dx / (dist + 1)) * rip * amp * damp;
                        oy += (dy / (dist + 1)) * rip * amp * damp;
                        szMod = 0.5 + 0.5 * rip * damp;
                    }
                    if (ox < margin || ox > W - margin || oy < margin || oy > H - margin) continue;
                    var sz = cfg.minSizePts + (cfg.maxSizePts - cfg.minSizePts) * Math.max(0.1, szMod);
                    var dot = createCircleItem(targetGroup, ox, oy, sz * 0.45, H);
                    var colD = evaluatePaletteColor(ox, oy, W, H, cx, cy, maxR, cfg, paletteRGB, szMod);
                    styleVectorItem(dot, colD, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
            return;
        }

        // C07: Circular Wave Field
        if (style === 6) {
            var samplePts = 64;
            for (var ri = 1; ri <= lineCount; ri++) {
                if (!ExecutionController.canContinue()) break;
                var rad = (ri / lineCount) * (Math.min(W, H) * 0.45);
                var cPts = [];
                for (var s = 0; s < samplePts; s++) {
                    var a = (s / samplePts) * 2 * Math.PI + rotRad;
                    var rW = rad + Math.sin(a * Math.max(2, Math.round(cfg.waveFreq)) + ri * 0.3 + phaseRad) * (amp * 0.4);
                    cPts.push([cx + Math.cos(a) * rW, cy + Math.sin(a) * rW]);
                }
                var cWave = createSmoothBezierPath(targetGroup, cPts, true, smooth, H);
                var colCW = evaluatePaletteColor(cx + rad, cy, W, H, cx, cy, maxR, cfg, paletteRGB, ri / lineCount);
                styleVectorItem(cWave, colCW, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
            return;
        }

        // C08: Radial Flow Lines
        if (style === 7) {
            var rays = lineCount * 2;
            var rSteps = 28;
            var maxRayLen = Math.min(W, H) * 0.46;
            for (var k = 0; k < rays; k++) {
                if (!ExecutionController.canContinue()) break;
                var baseA = (k / rays) * 2 * Math.PI + rotRad;
                var rPts = [];
                for (var st = 1; st <= rSteps; st++) {
                    var prog = st / rSteps;
                    var rDist = prog * maxRayLen;
                    var twist = Math.sin(prog * cfg.waveFreq * Math.PI + phaseRad) * (amp / 180.0);
                    var aCur = baseA + twist;
                    rPts.push([cx + Math.cos(aCur) * rDist, cy + Math.sin(aCur) * rDist]);
                }
                var rLine = createSmoothBezierPath(targetGroup, rPts, false, smooth, H);
                var colRF = evaluatePaletteColor(rPts[rPts.length - 1][0], rPts[rPts.length - 1][1], W, H, cx, cy, maxR, cfg, paletteRGB, k / rays);
                styleVectorItem(rLine, colRF, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
            return;
        }

        // Continuous Ribbon/Wave Line Styles: C01, C02, C03, C05, C09, C10
        var passes = (style === 8) ? 2 : (style === 9 ? 3 : 1);
        var xSamples = 40;
        var usableW = W - margin * 2;
        var usableH = H - margin * 2;

        for (var p = 0; p < passes; p++) {
            var passPhase = phaseRad + p * 1.1;
            var passAmp = amp * (1.0 - p * 0.22);
            for (var li = 0; li < lineCount; li++) {
                if (!ExecutionController.canContinue()) break;
                var lNorm = li / Math.max(1, lineCount - 1);
                var baseCoord = -usableH * 0.5 + lNorm * usableH;
                var pts = [];

                for (var xi = 0; xi <= xSamples; xi++) {
                    var xNorm = xi / xSamples;
                    var u = -usableW * 0.5 + xNorm * usableW;
                    var v = baseCoord;
                    var disp = 0;

                    if (style === 0) {
                        // C01: Single Sine Wave
                        disp = Math.sin(u * freq + passPhase) * passAmp;
                    } else if (style === 1) {
                        // C02: Multi-Sine Harmonic Wave
                        disp = Math.sin(u * freq + passPhase) * passAmp +
                               Math.sin(u * freq * 2.3 - passPhase) * (passAmp * 0.35) +
                               Math.cos(u * freq * 0.5 + li * 0.2) * (passAmp * 0.25);
                    } else if (style === 2) {
                        // C03: Double-Wave Interference
                        disp = Math.sin(u * freq + li * 0.25 + passPhase) * Math.cos(u * freq * 0.6 - li * 0.15) * passAmp * 1.3;
                    } else if (style === 4 || style === 9) {
                        // C05: Flowing Bezier Curves & C10: Multi-Layer Flow Composition
                        disp = Math.sin(u * freq + li * 0.18 + passPhase) * passAmp +
                               Math.cos(v * freq * 0.8 + u * freq * 0.4) * (passAmp * 0.55);
                    } else if (style === 8) {
                        // C09: Organic Wavy Grid (Orthogonal Passes)
                        disp = (fieldNoise2D(u * freq * 0.6, v * freq * 0.6, cfg.seed + p * 50) - 0.5) * passAmp * 1.8;
                    }

                    var lx = (p === 1 && style === 8) ? (v + disp) : u;
                    var ly = (p === 1 && style === 8) ? u : (v + disp);
                    var wx = cx + (lx * cosR - ly * sinR);
                    var wy = cy + (lx * sinR + ly * cosR);

                    if (wx >= margin * 0.5 && wx <= W - margin * 0.5 && wy >= margin * 0.5 && wy <= H - margin * 0.5) {
                        pts.push([wx, wy]);
                    }
                }

                if (pts.length >= 2) {
                    var wavePath = createSmoothBezierPath(targetGroup, pts, false, smooth, H);
                    var midPt = pts[Math.floor(pts.length / 2)];
                    var colW = evaluatePaletteColor(midPt[0], midPt[1], W, H, cx, cy, maxR, cfg, paletteRGB, lNorm);
                    var sw = cfg.strokeWidth * (style === 9 ? (1.2 - p * 0.3) : 1.0);
                    styleVectorItem(wavePath, colW, false, true, sw, cfg.opacity, blendEnum);
                }
            }
        }
    }

    // ========================================================================

    // ========================================================================
    // MODULE 11: CREATIVE ENGINE 4 — OPTICAL ILLUSION & MOIRE (10 STYLES)
    // ========================================================================
// ========================================================================
    function runEngineOpticalIllusion(targetGroup, cfg, rng, paletteRGB) {
        var W = cfg.widthPts, H = cfg.heightPts, margin = cfg.marginPts;
        var cx = W * (cfg.centerX / 100.0);
        var cy = H * (cfg.centerY / 100.0);
        var maxR = Math.min(W, H) * 0.45 * (cfg.scale / 100.0);
        var ringCount = Math.max(5, Math.min(180, cfg.illusionRings));
        var rotRad = (cfg.rotation * Math.PI) / 180.0;
        var contrastRatio = clampNum(cfg.illusionContrast, 10, 100, 80) / 100.0;
        var blendEnum = resolveBlendMode(cfg.blendMode);
        var style = cfg.illusionStyle; // 0..9

        // D01: Concentric Rings Illusion
        if (style === 0) {
            for (var i = ringCount; i >= 1; i--) {
                if (!ExecutionController.canContinue()) break;
                var rNorm = i / ringCount;
                var r = rNorm * maxR;
                var circle = createCircleItem(targetGroup, cx, cy, r, H);
                var sw = cfg.strokeWidth * (0.5 + contrastRatio * (0.5 + 0.5 * Math.sin(i * 0.8)));
                var col = evaluatePaletteColor(cx + r, cy, W, H, cx, cy, maxR, cfg, paletteRGB, rNorm);
                styleVectorItem(circle, col, false, true, sw, cfg.opacity, blendEnum);
            }
        }
        // D02: Radial Line Burst
        else if (style === 1) {
            var numRays = ringCount * 3;
            var innerR = Math.max(4, maxR * 0.06);
            for (var k = 0; k < numRays; k++) {
                if (!ExecutionController.canContinue()) break;
                var a = (k / numRays) * 2 * Math.PI + rotRad;
                var p1 = [cx + Math.cos(a) * innerR, cy + Math.sin(a) * innerR];
                var p2 = [cx + Math.cos(a) * maxR, cy + Math.sin(a) * maxR];
                var ray = createPolylineItem(targetGroup, [p1, p2], false, H);
                var colR = evaluatePaletteColor(p2[0], p2[1], W, H, cx, cy, maxR, cfg, paletteRGB, k / numRays);
                styleVectorItem(ray, colR, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
        // D03: Rotated Grid Interference (Moire-Inspired Superposition)
        else if (style === 2) {
            var sp = Math.max(6, (maxR * 2) / ringCount);
            var halfN = Math.ceil(maxR / sp);
            var angles = [rotRad, rotRad + ((cfg.branchAngle || 7) * Math.PI / 180.0)];
            for (var g = 0; g < 2; g++) {
                var aG = angles[g];
                var cA = Math.cos(aG), sA = Math.sin(aG);
                for (var m = -halfN; m <= halfN; m++) {
                    if (!ExecutionController.canContinue()) break;
                    var yOff = m * sp;
                    var pA = [cx + (-maxR * cA - yOff * sA), cy + (-maxR * sA + yOff * cA)];
                    var pB = [cx + (maxR * cA - yOff * sA), cy + (maxR * sA + yOff * cA)];
                    var lItem = createPolylineItem(targetGroup, [pA, pB], false, H);
                    var colM = evaluatePaletteColor(cx + yOff, cy, W, H, cx, cy, maxR, cfg, paletteRGB, (m + halfN) / (2 * halfN));
                    styleVectorItem(lItem, colM, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // D04: Circular Interference (Dual-Center Moire Rings)
        else if (style === 3) {
            var shift = maxR * 0.18 * contrastRatio;
            var centers = [
                [cx - Math.cos(rotRad) * shift, cy - Math.sin(rotRad) * shift],
                [cx + Math.cos(rotRad) * shift, cy + Math.sin(rotRad) * shift]
            ];
            for (var cIdx = 0; cIdx < 2; cIdx++) {
                for (var ri = 1; ri <= ringCount; ri++) {
                    if (!ExecutionController.canContinue()) break;
                    var rad = (ri / ringCount) * maxR;
                    var cItem = createCircleItem(targetGroup, centers[cIdx][0], centers[cIdx][1], rad, H);
                    var colC = evaluatePaletteColor(centers[cIdx][0] + rad * 0.5, centers[cIdx][1], W, H, cx, cy, maxR, cfg, paletteRGB, ri / ringCount);
                    styleVectorItem(cItem, colC, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // D05: Wave Interference Lattice
        else if (style === 4) {
            var freqW = Math.max(1, cfg.waveFreq) * Math.PI * 2 / maxR;
            var samples = 44;
            for (var pass = 0; pass < 2; pass++) {
                var angP = rotRad + pass * (Math.PI / 6);
                var cosP = Math.cos(angP), sinP = Math.sin(angP);
                for (var li = -ringCount / 2; li <= ringCount / 2; li++) {
                    if (!ExecutionController.canContinue()) break;
                    var baseY = (li / (ringCount / 2)) * maxR;
                    var pts = [];
                    for (var s = -samples; s <= samples; s++) {
                        var lx = (s / samples) * maxR;
                        var ly = baseY + Math.sin(lx * freqW + pass * 1.5) * (cfg.waveAmp * 0.45);
                        pts.push([cx + (lx * cosP - ly * sinP), cy + (lx * sinP + ly * cosP)]);
                    }
                    var wItem = createSmoothBezierPath(targetGroup, pts, false, cfg.curveSmooth, H);
                    var colWI = evaluatePaletteColor(cx, cy + baseY, W, H, cx, cy, maxR, cfg, paletteRGB, (li + ringCount / 2) / ringCount);
                    styleVectorItem(wItem, colWI, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // D06: Spiral Optical Illusion
        else if (style === 5) {
            var arms = Math.max(2, Math.min(12, cfg.symmetry));
            var segsPerArm = 60;
            for (var a = 0; a < arms; a++) {
                if (!ExecutionController.canContinue()) break;
                var startA = rotRad + (a * 2 * Math.PI / arms);
                var sPts = [];
                for (var s = 1; s <= segsPerArm; s++) {
                    var t = s / segsPerArm;
                    var r = t * maxR;
                    var ang = startA + t * cfg.spiralStr * Math.PI * 3.0;
                    sPts.push([cx + Math.cos(ang) * r, cy + Math.sin(ang) * r]);
                }
                var spPath = createSmoothBezierPath(targetGroup, sPts, false, cfg.curveSmooth, H);
                var colSp = evaluatePaletteColor(cx, cy, W, H, cx, cy, maxR, cfg, paletteRGB, a / arms);
                styleVectorItem(spPath, colSp, false, true, cfg.strokeWidth * 2.0, cfg.opacity, blendEnum);
            }
        }
        // D07: Checkerboard Perspective Warp
        else if (style === 6) {
            var nCells = Math.max(6, Math.min(32, Math.round(ringCount * 0.7)));
            var halfCells = nCells / 2;
            for (var r = -halfCells; r < halfCells; r++) {
                if (!ExecutionController.canContinue()) break;
                for (var c = -halfCells; c < halfCells; c++) {
                    if (!ExecutionController.canContinue()) break;
                    if ((Math.abs(r + c) % 2) !== 0) continue;
                    var corners = [[c, r], [c + 1, r], [c + 1, r + 1], [c, r + 1]];
                    var quadPts = [];
                    for (var q = 0; q < 4; q++) {
                        var nx = corners[q][0] / halfCells;
                        var ny = corners[q][1] / halfCells;
                        var rDist = Math.sqrt(nx * nx + ny * ny);
                        var pinch = 1.0 + contrastRatio * 0.55 * Math.sin(rDist * Math.PI);
                        var wx = cx + nx * maxR * pinch;
                        var wy = cy + ny * maxR * pinch;
                        quadPts.push([wx, wy]);
                    }
                    var quad = createPolylineItem(targetGroup, quadPts, true, H);
                    var colQ = evaluatePaletteColor(quadPts[0][0], quadPts[0][1], W, H, cx, cy, maxR, cfg, paletteRGB);
                    styleVectorItem(quad, colQ, true, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // D08: Repeating Line Modulation Illusion
        else if (style === 7) {
            var stepsX = 48;
            // Bug fix: renamed to avoid shadowing outer-scope usableW/usableH if present
            var d08UsableW = W - margin * 2;
            var d08UsableH = H - margin * 2;
            for (var li = 0; li <= ringCount; li++) {
                if (!ExecutionController.canContinue()) break;
                var lNorm = li / ringCount;
                var baseY = margin + lNorm * d08UsableH;
                var lPts = [];
                for (var xi = 0; xi <= stepsX; xi++) {
                    var px = margin + (xi / stepsX) * d08UsableW;
                    var dx = px - cx, dy = baseY - cy;
                    var dist = Math.sqrt(dx * dx + dy * dy);
                    var sphereBump = Math.max(0, 1.0 - (dist / (maxR * 0.65)));
                    var yShift = Math.sin(sphereBump * Math.PI) * cfg.waveAmp * contrastRatio * (dy < 0 ? -1 : 1);
                    lPts.push([px, baseY + yShift]);
                }
                var modLine = createSmoothBezierPath(targetGroup, lPts, false, cfg.curveSmooth, H);
                var colML = evaluatePaletteColor(cx, baseY, W, H, cx, cy, maxR, cfg, paletteRGB, lNorm);
                styleVectorItem(modLine, colML, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
        // D09: Nested Geometric Frames (Perspective Tunnel)
        else if (style === 8) {
            var sides = Math.max(4, cfg.geoVertices);
            for (var fi = 0; fi < ringCount; fi++) {
                if (!ExecutionController.canContinue()) break;
                var tF = fi / ringCount;
                var rFrame = maxR * Math.pow(1.0 - tF, 1.25);
                if (rFrame < 3) break;
                var angF = rotRad + fi * 0.06 * contrastRatio;
                var frame = createRegularPolygonItem(targetGroup, cx, cy, rFrame, sides, angF, H);
                var colFr = evaluatePaletteColor(cx + rFrame, cy, W, H, cx, cy, maxR, cfg, paletteRGB, tF);
                styleVectorItem(frame, colFr, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
        // D10: Symmetrical Radial Geometry (Rosette)
        else if (style === 9) {
            var sym = Math.max(4, Math.min(36, cfg.symmetry * 2));
            var orbitR = maxR * 0.45;
            var petalR = maxR * 0.48;
            for (var s = 0; s < sym; s++) {
                if (!ExecutionController.canContinue()) break;
                var a = rotRad + (s * 2 * Math.PI / sym);
                var ox = cx + Math.cos(a) * orbitR;
                var oy = cy + Math.sin(a) * orbitR;
                var rosette = createEllipseItem(targetGroup, ox, oy, petalR, petalR * (1.0 - contrastRatio * 0.55), (a * 180 / Math.PI), H);
                var colRos = evaluatePaletteColor(ox, oy, W, H, cx, cy, maxR, cfg, paletteRGB, s / sym);
                styleVectorItem(rosette, colRos, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
    }

    // ========================================================================

    // ========================================================================
    // MODULE 12: CREATIVE ENGINE 5 — PARAMETRIC GEOMETRY & TESSELLATION (10 STYLES)
    // ========================================================================
// ========================================================================
    function runEngineParametricGeometry(targetGroup, cfg, rng, paletteRGB) {
        var W = cfg.widthPts, H = cfg.heightPts, margin = cfg.marginPts;
        var cx = W * (cfg.centerX / 100.0);
        var cy = H * (cfg.centerY / 100.0);
        var maxR = Math.min(W, H) * 0.45 * (cfg.scale / 100.0);
        var scaleMul = cfg.scale / 100.0;
        var spX = Math.max(8, cfg.spacingXPts * scaleMul);
        var spY = Math.max(8, cfg.spacingYPts * scaleMul);
        var sideLen = Math.max(3, cfg.geoSideLen * scaleMul);
        var verts = Math.max(3, Math.min(24, cfg.geoVertices));
        var sym = Math.max(3, Math.min(32, cfg.symmetry));
        var rotRad = (cfg.rotation * Math.PI) / 180.0;
        var blendEnum = resolveBlendMode(cfg.blendMode);
        var style = cfg.geoStyle; // 0..9

        // E01: Regular Polygon Generator (Concentric & Radial Array)
        if (style === 0) {
            var rings = Math.max(3, Math.floor(maxR / spY));
            for (var r = 1; r <= rings; r++) {
                if (!ExecutionController.canContinue()) break;
                var rad = r * spY;
                var count = Math.max(sym, r * sym);
                for (var k = 0; k < count; k++) {
                    if (!ExecutionController.canContinue()) break;
                    var a = rotRad + (k * 2 * Math.PI / count);
                    var px = cx + Math.cos(a) * rad;
                    var py = cy + Math.sin(a) * rad;
                    if (px < margin || px > W - margin || py < margin || py > H - margin) continue;
                    var poly = createRegularPolygonItem(targetGroup, px, py, sideLen * 0.5, verts, a, H);
                    var col = evaluatePaletteColor(px, py, W, H, cx, cy, maxR, cfg, paletteRGB, r / rings);
                    styleVectorItem(poly, col, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // E02: Starburst Generator
        else if (style === 1) {
            var starLayers = Math.max(4, Math.min(36, Math.round(cfg.illusionRings * 0.6)));
            for (var sl = starLayers; sl >= 1; sl--) {
                if (!ExecutionController.canContinue()) break;
                var prog = sl / starLayers;
                var rOuter = prog * maxR;
                var rInner = rOuter * (0.35 + 0.25 * Math.cos(sl * 0.6));
                var star = createStarItem(targetGroup, cx, cy, rOuter, rInner, verts * 2, rotRad + sl * 0.08, H);
                var colS = evaluatePaletteColor(cx + rOuter, cy, W, H, cx, cy, maxR, cfg, paletteRGB, prog);
                styleVectorItem(star, colS, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
        // E03: Nested Polygon Generator (Grid of Multi-Ring Polygons)
        else if (style === 2) {
            var cellSpan = Math.max(24, spX * 1.8);
            var colsN = Math.floor((W - margin * 2) / cellSpan);
            var rowsN = Math.floor((H - margin * 2) / cellSpan);
            for (var rN = 0; rN <= rowsN; rN++) {
                if (!ExecutionController.canContinue()) break;
                for (var cN = 0; cN <= colsN; cN++) {
                    if (!ExecutionController.canContinue()) break;
                    var gx = margin + cN * cellSpan + cellSpan * 0.5;
                    var gy = margin + rN * cellSpan + cellSpan * 0.5;
                    if (gx > W - margin || gy > H - margin) continue;
                    for (var n = 3; n >= 1; n--) {
                        if (!ExecutionController.canContinue()) break;
                        var subR = (cellSpan * 0.44) * (n / 3.0);
                        var np = createRegularPolygonItem(targetGroup, gx, gy, subR, verts, rotRad + n * 0.15, H);
                        var colNP = evaluatePaletteColor(gx, gy, W, H, cx, cy, maxR, cfg, paletteRGB, n / 3.0);
                        styleVectorItem(np, colNP, cfg.useFill && n === 1, true, cfg.strokeWidth, cfg.opacity, blendEnum);
                    }
                }
            }
        }
        // E04: Radial Polygon Arrays
        else if (style === 3) {
            var numRings = Math.max(4, Math.floor(maxR / spY));
            for (var ri = 1; ri <= numRings; ri++) {
                if (!ExecutionController.canContinue()) break;
                var rDist = ri * spY;
                var nItems = sym * ri;
                for (var j = 0; j < nItems; j++) {
                    if (!ExecutionController.canContinue()) break;
                    var theta = rotRad + (j * 2 * Math.PI / nItems);
                    var rx = cx + Math.cos(theta) * rDist;
                    var ry = cy + Math.sin(theta) * rDist;
                    if (rx < margin || rx > W - margin || ry < margin || ry > H - margin) continue;
                    var pSides = 3 + ((ri + j) % 5);
                    var itemP = createRegularPolygonItem(targetGroup, rx, ry, sideLen * 0.45, pSides, theta, H);
                    var colRP = evaluatePaletteColor(rx, ry, W, H, cx, cy, maxR, cfg, paletteRGB, ri / numRings);
                    styleVectorItem(itemP, colRP, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // E05: Circular Polar Grid (Sectored Web)
        else if (style === 4) {
            var pRings = Math.max(4, Math.floor(maxR / spY));
            var pSpokes = sym * 3;
            for (var pr = 1; pr <= pRings; pr++) {
                if (!ExecutionController.canContinue()) break;
                var cRing = createCircleItem(targetGroup, cx, cy, pr * spY, H);
                var colCR = evaluatePaletteColor(cx + pr * spY, cy, W, H, cx, cy, maxR, cfg, paletteRGB, pr / pRings);
                styleVectorItem(cRing, colCR, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
            for (var ps = 0; ps < pSpokes; ps++) {
                if (!ExecutionController.canContinue()) break;
                var aS = rotRad + (ps * 2 * Math.PI / pSpokes);
                var spLine = createPolylineItem(targetGroup, [[cx, cy], [cx + Math.cos(aS) * (pRings * spY), cy + Math.sin(aS) * (pRings * spY)]], false, H);
                var colSL = evaluatePaletteColor(cx + Math.cos(aS) * maxR, cy + Math.sin(aS) * maxR, W, H, cx, cy, maxR, cfg, paletteRGB, ps / pSpokes);
                styleVectorItem(spLine, colSL, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
            }
        }
        // E06: Hexagonal Honeycomb Grid
        else if (style === 5) {
            var hexR = sideLen * 0.65;
            var dxH = hexR * Math.sqrt(3.0);
            var dyH = hexR * 1.5;
            var colsH = Math.floor((W - margin * 2) / dxH);
            var rowsH = Math.floor((H - margin * 2) / dyH);
            for (var rh = 0; rh <= rowsH; rh++) {
                if (!ExecutionController.canContinue()) break;
                for (var ch = 0; ch <= colsH; ch++) {
                    if (!ExecutionController.canContinue()) break;
                    var hx = margin + ch * dxH + ((rh % 2 === 1) ? dxH * 0.5 : 0);
                    var hy = margin + rh * dyH;
                    if (hx < margin || hx > W - margin || hy < margin || hy > H - margin) continue;
                    var hexItem = createRegularPolygonItem(targetGroup, hx, hy, hexR * 0.92, 6, Math.PI / 6 + rotRad, H);
                    var colH = evaluatePaletteColor(hx, hy, W, H, cx, cy, maxR, cfg, paletteRGB);
                    styleVectorItem(hexItem, colH, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // E07: Triangular Isometric Tessellation
        else if (style === 6) {
            var triSide = Math.max(12, sideLen * 1.2);
            var triH = triSide * 0.8660254;
            var colsT = Math.floor((W - margin * 2) / (triSide * 0.5));
            var rowsT = Math.floor((H - margin * 2) / triH);
            for (var rt = 0; rt < rowsT; rt++) {
                if (!ExecutionController.canContinue()) break;
                for (var ct = 0; ct < colsT; ct++) {
                    if (!ExecutionController.canContinue()) break;
                    var x0 = margin + ct * (triSide * 0.5);
                    var y0 = margin + rt * triH;
                    var up = ((rt + ct) % 2 === 0);
                    var tPts = up
                        ? [[x0, y0 + triH], [x0 + triSide * 0.5, y0], [x0 + triSide, y0 + triH]]
                        : [[x0, y0], [x0 + triSide, y0], [x0 + triSide * 0.5, y0 + triH]];
                    var tItem = createPolylineItem(targetGroup, tPts, true, H);
                    var colT = evaluatePaletteColor(x0 + triSide * 0.5, y0 + triH * 0.5, W, H, cx, cy, maxR, cfg, paletteRGB);
                    styleVectorItem(tItem, colT, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // E08: Geometric Diamond Isometric Cube Tiling
        else if (style === 7) {
            var rCube = Math.max(10, sideLen * 0.85);
            var dxC = rCube * Math.sqrt(3.0);
            var dyC = rCube * 1.5;
            var colsC = Math.floor((W - margin * 2) / dxC);
            var rowsC = Math.floor((H - margin * 2) / dyC);
            for (var rc = 0; rc < rowsC; rc++) {
                if (!ExecutionController.canContinue()) break;
                for (var cc = 0; cc < colsC; cc++) {
                    if (!ExecutionController.canContinue()) break;
                    var kx = margin + cc * dxC + ((rc % 2 === 1) ? dxC * 0.5 : 0);
                    var ky = margin + rc * dyC;
                    if (kx < margin + rCube || kx > W - margin - rCube || ky < margin + rCube || ky > H - margin - rCube) continue;
                    // 3 rhombuses forming an isometric cube
                    for (var f = 0; f < 3; f++) {
                        if (!ExecutionController.canContinue()) break;
                        var a1 = (f * 2 * Math.PI / 3) - Math.PI / 6 + rotRad;
                        var a2 = ((f + 1) * 2 * Math.PI / 3) - Math.PI / 6 + rotRad;
                        var pCenter = [kx, ky];
                        var pEdge1 = [kx + Math.cos(a1) * rCube, ky + Math.sin(a1) * rCube];
                        var pCorner = [kx + (Math.cos(a1) + Math.cos(a2)) * rCube, ky + (Math.sin(a1) + Math.sin(a2)) * rCube];
                        var pEdge2 = [kx + Math.cos(a2) * rCube, ky + Math.sin(a2) * rCube];
                        var rhomb = createPolylineItem(targetGroup, [pCenter, pEdge1, pCorner, pEdge2], true, H);
                        var colRh = evaluatePaletteColor(pCorner[0], pCorner[1], W, H, cx, cy, maxR, cfg, paletteRGB, f / 3.0);
                        styleVectorItem(rhomb, colRh, cfg.useFill, true, cfg.strokeWidth, cfg.opacity, blendEnum);
                    }
                }
            }
        }
        // E09: Cellular-Inspired Voronoi Distance Grid (Honest Nearest-Seed F2-F1 Approximation)
        else if (style === 8) {
            var seedCount = Math.max(10, Math.min(80, sym * 5));
            var seeds = [];
            for (var s = 0; s < seedCount; s++) {
                seeds.push({ x: rng.range(margin, W - margin), y: rng.range(margin, H - margin) });
            }
            var colsV = Math.floor((W - margin * 2) / spX);
            var rowsV = Math.floor((H - margin * 2) / spY);
            for (var rv = 0; rv <= rowsV; rv++) {
                if (!ExecutionController.canContinue()) break;
                for (var cv = 0; cv <= colsV; cv++) {
                    if (!ExecutionController.canContinue()) break;
                    var vx = margin + cv * spX + ((rv % 2 === 1) ? spX * 0.5 : 0);
                    var vy = margin + rv * spY * 0.866;
                    if (vx > W - margin || vy > H - margin) continue;
                    var d1 = 999999, d2 = 999999;
                    for (var si = 0; si < seeds.length; si++) {
                        var dx = vx - seeds[si].x, dy = vy - seeds[si].y;
                        var d = Math.sqrt(dx * dx + dy * dy);
                        if (d < d1) { d2 = d1; d1 = d; }
                        else if (d < d2) { d2 = d; }
                    }
                    var ridge = Math.min(1, (d2 - d1) / (spX * 2.2));
                    var cellSz = Math.max(1.5, sideLen * 0.5 * (0.2 + 0.8 * ridge));
                    var cellPoly = createRegularPolygonItem(targetGroup, vx, vy, cellSz, verts, rotRad + ridge, H);
                    var colV = evaluatePaletteColor(vx, vy, W, H, cx, cy, maxR, cfg, paletteRGB, ridge);
                    styleVectorItem(cellPoly, colV, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
                }
            }
        }
        // E10: Repeating Modular Truchet Shapes
        else if (style === 9) {
            var tileW = Math.max(16, spX);
            var colsTr = Math.floor((W - margin * 2) / tileW);
            var rowsTr = Math.floor((H - margin * 2) / tileW);
            for (var rTr = 0; rTr < rowsTr; rTr++) {
                if (!ExecutionController.canContinue()) break;
                for (var cTr = 0; cTr < colsTr; cTr++) {
                    if (!ExecutionController.canContinue()) break;
                    var tx = margin + cTr * tileW;
                    var ty = margin + rTr * tileW;
                    var state = rng.nextInt(0, 3);
                    var halfT = tileW * 0.5;
                    var diag1, diag2;
                    if (state % 2 === 0) {
                        diag1 = [[tx, ty + halfT], [tx + halfT, ty]];
                        diag2 = [[tx + halfT, ty + tileW], [tx + tileW, ty + halfT]];
                    } else {
                        diag1 = [[tx, ty + halfT], [tx + halfT, ty + tileW]];
                        diag2 = [[tx + halfT, ty], [tx + tileW, ty + halfT]];
                    }
                    var p1 = createSmoothBezierPath(targetGroup, [diag1[0], [tx + halfT, ty + halfT], diag1[1]], false, 70, H);
                    var p2 = createSmoothBezierPath(targetGroup, [diag2[0], [tx + halfT, ty + halfT], diag2[1]], false, 70, H);
                    var colTr = evaluatePaletteColor(tx + halfT, ty + halfT, W, H, cx, cy, maxR, cfg, paletteRGB);
                    styleVectorItem(p1, colTr, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
                    styleVectorItem(p2, colTr, false, true, cfg.strokeWidth, cfg.opacity, blendEnum);
                    if (cfg.useFill && state === 3) {
                        var accent = createCircleItem(targetGroup, tx + halfT, ty + halfT, tileW * 0.16, H);
                        styleVectorItem(accent, colTr, true, false, 0, cfg.opacity, blendEnum);
                    }
                }
            }
        }
    }

    // ========================================================================

    // ========================================================================
    // MODULE 13: CREATIVE ENGINE 6 — ORGANIC SCATTER & COLLISION GRID (5 MODES)
    // ========================================================================
// ========================================================================
    function runEngineOrganicScatter(targetGroup, cfg, rng, paletteRGB) {
        var W = cfg.widthPts, H = cfg.heightPts, margin = cfg.marginPts;
        var cx = W * (cfg.centerX / 100.0);
        var cy = H * (cfg.centerY / 100.0);
        var maxR = Math.min(W, H) * 0.45 * (cfg.scale / 100.0);
        var scaleMul = cfg.scale / 100.0;
        var minS = Math.max(1.0, cfg.minSizePts * scaleMul);
        var maxS = Math.max(minS + 1.0, cfg.maxSizePts * scaleMul);
        var targetCount = Math.max(10, Math.min(cfg.maxObjects, cfg.scatterCount));
        var useCollision = Boolean(cfg.scatterCollision || cfg.scatterStyle === 4);
        var blendEnum = resolveBlendMode(cfg.blendMode);
        var style = cfg.scatterStyle; // 0..4

        // Prepare cluster centers if G03 (Multi-Cluster Colony Placement)
        var numClusters = Math.max(2, Math.min(16, cfg.scatterClusters));
        var clusters = [];
        for (var cl = 0; cl < numClusters; cl++) {
            clusters.push({
                x: rng.range(margin + W * 0.1, W - margin - W * 0.1),
                y: rng.range(margin + H * 0.1, H - margin - H * 0.1),
                spread: Math.min(W, H) * rng.range(0.08, 0.2)
            });
        }

        // Bounded Spatial Hash Grid for O(1) neighborhood collision checking
        var cellSize = Math.max(8, maxS * 1.1);
        var gridCols = Math.max(1, Math.ceil(W / cellSize));
        var spatialBuckets = {};

        function canPlaceCircle(px, py, radius) {
            if (!useCollision) return true;
            var gx = Math.floor(px / cellSize);
            var gy = Math.floor(py / cellSize);
            for (var ny = gy - 1; ny <= gy + 1; ny++) {
                for (var nx = gx - 1; nx <= gx + 1; nx++) {
                    var key = nx + "_" + ny;
                    var bucket = spatialBuckets[key];
                    if (bucket) {
                        for (var b = 0; b < bucket.length; b++) {
                            var other = bucket[b];
                            var dx = px - other.x, dy = py - other.y;
                            var minDist = radius + other.r + 1.5;
                            if (dx * dx + dy * dy < minDist * minDist) {
                                return false;
                            }
                        }
                    }
                }
            }
            var myKey = gx + "_" + gy;
            if (!spatialBuckets[myKey]) spatialBuckets[myKey] = [];
            spatialBuckets[myKey].push({ x: px, y: py, r: radius });
            return true;
        }

        var maxAttempts = targetCount * (useCollision ? 8 : 2);
        var placed = 0;

        for (var att = 0; att < maxAttempts && placed < targetCount; att++) {
            if (!ExecutionController.canContinue()) break;
            var px = cx, py = cy;

            if (style === 0 || style === 4) {
                // G01: Uniform Random or G05: Collision-Avoided Scatter
                px = rng.range(margin, W - margin);
                py = rng.range(margin, H - margin);
            } else if (style === 1) {
                // G02: Radial Gaussian Distribution
                px = cx + rng.gaussian() * (maxR * 0.45);
                py = cy + rng.gaussian() * (maxR * 0.45);
            } else if (style === 2) {
                // G03: Multi-Cluster Colony Placement
                var cNode = clusters[att % clusters.length];
                px = cNode.x + rng.gaussian() * cNode.spread;
                py = cNode.y + rng.gaussian() * cNode.spread;
            } else if (style === 3) {
                // G04: Spiral Arm Scatter
                var armIdx = att % Math.max(2, cfg.symmetry);
                var prog = rng.next();
                var rSp = prog * maxR;
                var angSp = (armIdx * 2 * Math.PI / Math.max(2, cfg.symmetry)) + prog * cfg.spiralStr * Math.PI * 2 + rng.gaussian() * 0.22;
                px = cx + Math.cos(angSp) * rSp;
                py = cy + Math.sin(angSp) * rSp;
            }

            if (px < margin || px > W - margin || py < margin || py > H - margin) continue;
            var fade = computeEdgeFade(px, py, W, H, margin, cfg.edgeExclusion);
            if (fade <= 0.05) continue;

            var radius = (rng.range(minS, maxS) * 0.5) * fade;
            if (!canPlaceCircle(px, py, radius)) continue;

            var primType = cfg.scatterPrimitive; // 0=Circle, 1=Polygon, 2=Star, 3=Mixed
            var chosenType = (primType === 3) ? (placed % 3) : primType;
            var rotAng = rng.range(0, 360);
            var item = null;

            if (chosenType === 0) {
                item = createCircleItem(targetGroup, px, py, radius, H);
            } else if (chosenType === 1) {
                item = createRegularPolygonItem(targetGroup, px, py, radius, cfg.geoVertices, (rotAng * Math.PI / 180.0), H);
            } else {
                item = createStarItem(targetGroup, px, py, radius, radius * 0.48, Math.max(4, cfg.geoVertices), (rotAng * Math.PI / 180.0), H);
            }

            var col = evaluatePaletteColor(px, py, W, H, cx, cy, maxR, cfg, paletteRGB, placed / targetCount);
            styleVectorItem(item, col, cfg.useFill, cfg.useStroke, cfg.strokeWidth, cfg.opacity, blendEnum);
            placed++;
        }
    }

    // ========================================================================

    // ========================================================================
    // MODULE 14: CREATIVE ENGINE 7 — MULTI-LAYER COMPOSITION & DOCUMENT BUILDER
    // ========================================================================
    function dispatchEngineByIndex(engineIndex, targetGroup, cfg, rng, paletteRGB) {
        switch (engineIndex) {
            case 0:
                generatePatternVectorArtwork(targetGroup, cfg, rng);
                break;
            case 1:
                runEngineFractalArt(targetGroup, cfg, rng, paletteRGB);
                break;
            case 2:
                runEngineMeshWaveStudio(targetGroup, cfg, rng, paletteRGB);
                break;
            case 3:
                runEngineOpticalIllusion(targetGroup, cfg, rng, paletteRGB);
                break;
            case 4:
                runEngineParametricGeometry(targetGroup, cfg, rng, paletteRGB);
                break;
            case 5:
                runEngineOrganicScatter(targetGroup, cfg, rng, paletteRGB);
                break;
            default:
                generatePatternVectorArtwork(targetGroup, cfg, rng);
                break;
        }
    }

    function applyArtboardClippingToLayer(layer, W, H, groupToClip) {
        if (!groupToClip || groupToClip.pageItems.length === 0) return;
        var clipGrp = layer.groupItems.add();
        clipGrp.name = groupToClip.name + "_Clipped";
        groupToClip.move(clipGrp, ElementPlacement.PLACEATEND);
        var mask = clipGrp.pathItems.rectangle(H, 0, W, H);
        mask.filled = false;
        mask.stroked = false;
        mask.clipping = true;
        clipGrp.clipped = true;
    }

    function buildVectorStudioDocument(cfg, variationSeed, docTitle) {
        var W = cfg.widthPts;
        var H = cfg.heightPts;

        var doc = null;
        try {
            var docPreset = new DocumentPreset();
            docPreset.width = W;
            docPreset.height = H;
            docPreset.colorMode = DocumentColorSpace.RGB;
            docPreset.units = RulerUnits.Points;
            docPreset.title = docTitle || "RI_Vector_Studio_Pro";
            try {
                doc = app.documents.addDocument("Print", docPreset);
            } catch (eDocStr) {
                doc = app.documents.addDocument(DocumentColorSpace.RGB, docPreset);
            }
        } catch (eDocPreset) {
            try {
                doc = app.documents.add(DocumentColorSpace.RGB, W, H);
            } catch (eDocAdd) {
                doc = app.documents.add();
            }
        }

        if (doc && doc.artboards && doc.artboards.length > 0) {
            try {
                doc.artboards[0].artboardRect = [0, H, W, 0];
            } catch (eAb) {}
        }
        ExecutionController.reset(cfg.maxObjects);

        var paletteRGB = {
            c1: hexToRGB(cfg.c1),
            c2: hexToRGB(cfg.c2),
            c3: hexToRGB(cfg.c3),
            c4: hexToRGB(cfg.c4)
        };

        // Layer 01: Background
        var baseLayerUsed = false;
        if (cfg.useBg && !cfg.transparentBg) {
            var lyrBg = doc.layers[0];
            lyrBg.name = "01 Background";
            baseLayerUsed = true;
            var bgRect = lyrBg.pathItems.rectangle(H, 0, W, H);
            var bgCol = hexToRGB(cfg.bgHex);
            bgRect.filled = true;
            bgRect.fillColor = makeAIColor(bgCol.r, bgCol.g, bgCol.b);
            bgRect.stroked = false;
        }

        // Layer 02: Optional Placed Reference Image Underlay
        if (cfg.useImageUnderlay && cfg.imagePath) {
            var imgFile = new File(cfg.imagePath);
            if (imgFile.exists) {
                var lyrImg = baseLayerUsed ? doc.layers.add() : doc.layers[0];
                lyrImg.name = "02 Reference Image Underlay";
                baseLayerUsed = true;
                var placed = lyrImg.placedItems.add();
                placed.file = imgFile;
                var ratio = Math.min(W / Math.max(1, placed.width), H / Math.max(1, placed.height));
                placed.width *= ratio;
                placed.height *= ratio;
                placed.left = (W - placed.width) * 0.5;
                placed.top = H - (H - placed.height) * 0.5;
                placed.opacity = 85;
            }
        }

        // Layer 03: Primary Pattern / Generative Artwork
        var lyrPrimary = baseLayerUsed ? doc.layers.add() : doc.layers[0];
        lyrPrimary.name = (cfg.primaryEngine === 1) ? "05 Fractal Details" : (cfg.primaryEngine === 4 ? "02 Base Geometry" : "03 Primary Pattern");
        baseLayerUsed = true;
        var grpPrimary = lyrPrimary.groupItems.add();
        grpPrimary.name = "Primary_Generator_Group";

        var rngPrimary = new SeededRNG(variationSeed);
        dispatchEngineByIndex(cfg.primaryEngine, grpPrimary, cfg, rngPrimary, paletteRGB);
        if (cfg.clipArtboard) {
            applyArtboardClippingToLayer(lyrPrimary, W, H, grpPrimary);
        }

        // Layer 04: Composition Mode 1 or 2: Secondary Generator Layer
        if ((cfg.compMode === 1 || cfg.compMode === 2) && ExecutionController.canContinue()) {
            var lyrSecondary = doc.layers.add();
            lyrSecondary.name = "04 Secondary Pattern";
            var grpSecondary = lyrSecondary.groupItems.add();
            grpSecondary.name = "Secondary_Generator_Group";

            var secCfg = {};
            for (var k in cfg) {
                if (cfg.hasOwnProperty(k)) secCfg[k] = cfg[k];
            }
            secCfg.scale = Math.max(20, cfg.scale * 0.82);
            secCfg.opacity = Math.max(15, Math.round(cfg.opacity * 0.75));
            secCfg.rotation = (cfg.rotation + 30) % 360;

            var rngSec = new SeededRNG(variationSeed + 7919);
            dispatchEngineByIndex(cfg.secondaryEngine, grpSecondary, secCfg, rngSec, paletteRGB);
            if (cfg.clipArtboard) {
                applyArtboardClippingToLayer(lyrSecondary, W, H, grpSecondary);
            }
        }

        // Layer 05: Composition Mode 2: Multi-Layer Decorative Scatter Accents
        if (cfg.compMode === 2 && ExecutionController.canContinue()) {
            var lyrAccents = doc.layers.add();
            lyrAccents.name = "07 Decorative Elements";
            var grpAccents = lyrAccents.groupItems.add();
            grpAccents.name = "Decorative_Scatter_Group";

            var accCfg = {};
            for (var ak in cfg) {
                if (cfg.hasOwnProperty(ak)) accCfg[ak] = cfg[ak];
            }
            accCfg.scatterCount = Math.min(180, Math.round(cfg.scatterCount * 0.45));
            accCfg.opacity = Math.max(20, Math.round(cfg.opacity * 0.65));

            var rngAcc = new SeededRNG(variationSeed + 15485);
            runEngineOrganicScatter(grpAccents, accCfg, rngAcc, paletteRGB);
            if (cfg.clipArtboard) {
                applyArtboardClippingToLayer(lyrAccents, W, H, grpAccents);
            }
        }

        app.redraw();
        return {
            doc: doc,
            objectCount: ExecutionController.objectCounter,
            cancelled: ExecutionController.cancelRequested
        };
    }

    // ========================================================================
    // MODULE 15: PRESET MANAGER (SAFE KEY-VALUE INI SERIALIZER — NO eval)
    // ========================================================================
// ========================================================================
    var PRESET_HEADER_SIGNATURE = "; RI_CREATIVE_VECTOR_ENGINE_X_PRESET_V2";

    function serializeStudioPreset(cfg) {
        var lines = [
            PRESET_HEADER_SIGNATURE,
            "; Brand=" + STUDIO_BRAND,
            "; Saved=" + (new Date()).toUTCString()
        ];
        for (var k in cfg) {
            if (cfg.hasOwnProperty(k)) {
                var val = cfg[k];
                var t = typeof val;
                if (t === "number" || t === "boolean" || t === "string") {
                    lines.push(k + "=" + String(val).replace(/[\r\n]/g, " "));
                }
            }
        }
        return lines.join("\n");
    }

    function parseStudioPreset(rawText) {
        if (!rawText || typeof rawText !== "string") {
            throw new Error("Preset file is empty or unreadable.");
        }
        var lines = rawText.split(/\r?\n/);
        var validHeader = false;
        var out = {};
        var parsedKeys = 0;

        for (var i = 0; i < lines.length; i++) {
            var line = lines[i].replace(/^\s+|\s+$/g, "");
            if (!line) continue;
            if (line === PRESET_HEADER_SIGNATURE) {
                validHeader = true;
                continue;
            }
            if (line.charAt(0) === ";" || line.charAt(0) === "#") continue;
            var eqPos = line.indexOf("=");
            if (eqPos <= 0) continue;
            var key = line.substring(0, eqPos).replace(/^\s+|\s+$/g, "");
            var val = line.substring(eqPos + 1).replace(/^\s+|\s+$/g, "");
            if (!/^[a-zA-Z0-9_]+$/.test(key)) continue;

            if (val === "true") {
                out[key] = true;
            } else if (val === "false") {
                out[key] = false;
            } else if (/^-?\d+(\.\d+)?$/.test(val)) {
                out[key] = parseFloat(val);
            } else {
                out[key] = val;
            }
            parsedKeys++;
        }

        if (!validHeader || parsedKeys < 3) {
            throw new Error("Malformed preset file: Missing RI Creative Vector Engine X signature or valid key-value pairs.");
        }
        return out;
    }

    // ========================================================================

    // ========================================================================
    // MODULE 16: SAFE MULTI-FORMAT EXPORT ENGINE (AI, SVG, PNG, JPEG, EPS, PDF)
    // ========================================================================
// ========================================================================
    function computeRasterExportScale(cfg) {
        var W = Math.max(1, cfg.widthPts || 1920);
        var H = Math.max(1, cfg.heightPts || 1080);
        var maxDim = Math.max(W, H);
        var mode = parseInt(cfg.rasterResMode !== undefined ? cfg.rasterResMode : (cfg.rasterResIndex !== undefined ? cfg.rasterResIndex : 0), 10);
        if (isNaN(mode)) mode = 0;

        var scalePct = 416.67; // Default 300 PPI (300 / 72 * 100)
        if (mode === 0) {
            // 300 PPI (Print & Stock Standard: 300 / 72 = 4.1667x)
            scalePct = (300.0 / 72.0) * 100.0;
        } else if (mode === 1) {
            // 600 PPI (Ultra-HD Print: 600 / 72 = 8.3333x)
            scalePct = (600.0 / 72.0) * 100.0;
        } else if (mode === 2) {
            // 4K UHD (3840px Longest Edge)
            scalePct = (3840.0 / maxDim) * 100.0;
        } else if (mode === 3) {
            // 8K UHD (7680px Longest Edge)
            scalePct = (7680.0 / maxDim) * 100.0;
        } else {
            // Custom Scale %
            scalePct = clampNum(cfg.pngScale, 25, 1000, 416.67);
        }

        // Prevent exceeding Adobe Illustrator's internal rasterization pixel ceiling (~16,380 px max dimension)
        var maxSafeScale = (16000.0 / maxDim) * 100.0;
        if (scalePct > maxSafeScale) {
            scalePct = maxSafeScale;
        }
        return Math.max(25.0, Math.min(1000.0, scalePct));
    }

    function getUniqueSafeFile(folderObj, baseName, ext) {
        var cleanExt = ext.replace(/^\./, "");
        var candidate = new File(folderObj.fsName + "/" + baseName + "." + cleanExt);
        if (!candidate.exists) return candidate;
        var idx = 1;
        while (candidate.exists && idx < 9999) {
            candidate = new File(folderObj.fsName + "/" + baseName + "_" + idx + "." + cleanExt);
            idx++;
        }
        return candidate;
    }

    function verifyExportedFile(fileObj) {
        if (!fileObj) return false;
        return Boolean(fileObj.exists && fileObj.length > 0);
    }

    /**
     * Safe Export Sequence:
     * 1. PNG24, JPEG, SVG via doc.exportFile() first (does not mutate active document state).
     * 2. PDF, EPS, and finally AI via doc.saveAs() last so the final active document remains the editable .ai file.
     * Every exported file is verified on disk (exists && length > 0).
     */
    function exportVariationFormats(doc, outFolder, baseName, cfg, variationNum) {
        var summary = { exportedFiles: [], failedFormats: [] };
        var rasterScale = computeRasterExportScale(cfg);

        // 1. PNG Export (High-Resolution 300/600 PPI or 4K/8K)
        if (cfg.expPNG) {
            var pngFile = getUniqueSafeFile(outFolder, baseName, "png");
            try {
                var pngOpts = new ExportOptionsPNG24();
                pngOpts.antiAliasing = true;
                pngOpts.transparency = Boolean(cfg.transparentBg || !cfg.useBg);
                pngOpts.artBoardClipping = true;
                pngOpts.horizontalScale = rasterScale;
                pngOpts.verticalScale = rasterScale;
                doc.exportFile(pngFile, ExportType.PNG24, pngOpts);
                if (verifyExportedFile(pngFile)) {
                    summary.exportedFiles.push("PNG (" + pngFile.name + " @ " + Math.round(rasterScale) + "%)");
                } else {
                    throw new Error("PNG file was not created or is 0 bytes.");
                }
            } catch (ePng) {
                summary.failedFormats.push("PNG: " + ePng.message);
                ErrorRegistry.log("Export PNG", ePng, variationNum, cfg.generatorLabel, "", pngFile.fsName);
            }
        }

        // 2. JPEG Export (High-Resolution 300/600 PPI or 4K/8K + Max Quality)
        if (cfg.expJPG) {
            var jpgFile = getUniqueSafeFile(outFolder, baseName, "jpg");
            try {
                var jpgOpts = new ExportOptionsJPEG();
                jpgOpts.antiAliasing = true;
                jpgOpts.qualitySetting = clampNum(cfg.jpgQuality, 10, 100, 100);
                jpgOpts.artBoardClipping = true;
                jpgOpts.horizontalScale = rasterScale;
                jpgOpts.verticalScale = rasterScale;
                try { jpgOpts.optimization = true; } catch (eOpt) {}
                doc.exportFile(jpgFile, ExportType.JPEG, jpgOpts);
                if (verifyExportedFile(jpgFile)) {
                    summary.exportedFiles.push("JPG (" + jpgFile.name + " @ " + Math.round(rasterScale) + "%)");
                } else {
                    throw new Error("JPG file was not created or is 0 bytes.");
                }
            } catch (eJpg) {
                summary.failedFormats.push("JPG: " + eJpg.message);
                ErrorRegistry.log("Export JPG", eJpg, variationNum, cfg.generatorLabel, "", jpgFile.fsName);
            }
        }

        // 3. SVG Export
        if (cfg.expSVG) {
            var svgFile = getUniqueSafeFile(outFolder, baseName, "svg");
            try {
                var svgOpts = new ExportOptionsSVG();
                svgOpts.embedRasterImages = Boolean(cfg.useImageUnderlay);
                svgOpts.coordinatePrecision = 2;
                try { svgOpts.fontSubsetting = SVGFontSubsetting.NONE; } catch (eSub) {}
                doc.exportFile(svgFile, ExportType.SVG, svgOpts);
                if (verifyExportedFile(svgFile)) {
                    summary.exportedFiles.push("SVG (" + svgFile.name + ")");
                } else {
                    throw new Error("SVG file was not created or is 0 bytes.");
                }
            } catch (eSvg) {
                summary.failedFormats.push("SVG: " + eSvg.message);
                ErrorRegistry.log("Export SVG", eSvg, variationNum, cfg.generatorLabel, "", svgFile.fsName);
            }
        }

        // 4. PDF Export
        if (cfg.expPDF) {
            var pdfFile = getUniqueSafeFile(outFolder, baseName, "pdf");
            try {
                var pdfOpts = new PDFSaveOptions();
                pdfOpts.preserveEditability = true;
                pdfOpts.acrobatLayers = true;
                doc.saveAs(pdfFile, pdfOpts);
                if (verifyExportedFile(pdfFile)) {
                    summary.exportedFiles.push("PDF (" + pdfFile.name + ")");
                } else {
                    throw new Error("PDF file was not created or is 0 bytes.");
                }
            } catch (ePdf) {
                summary.failedFormats.push("PDF: " + ePdf.message);
                ErrorRegistry.log("Export PDF", ePdf, variationNum, cfg.generatorLabel, "", pdfFile.fsName);
            }
        }

        // 5. EPS Export
        if (cfg.expEPS) {
            var epsFile = getUniqueSafeFile(outFolder, baseName, "eps");
            try {
                var epsOpts = new EPSSaveOptions();
                epsOpts.embedAllFonts = true;
                epsOpts.includeDocumentThumbnails = true;
                doc.saveAs(epsFile, epsOpts);
                if (verifyExportedFile(epsFile)) {
                    summary.exportedFiles.push("EPS (" + epsFile.name + ")");
                } else {
                    throw new Error("EPS file was not created or is 0 bytes.");
                }
            } catch (eEps) {
                summary.failedFormats.push("EPS: " + eEps.message);
                ErrorRegistry.log("Export EPS", eEps, variationNum, cfg.generatorLabel, "", epsFile.fsName);
            }
        }

        // 6. Native AI Export (Saved last so active document stays associated with the editable .ai file)
        if (cfg.expAI) {
            var aiFile = getUniqueSafeFile(outFolder, baseName, "ai");
            try {
                var aiOpts = new IllustratorSaveOptions();
                aiOpts.pdfCompatible = true;
                aiOpts.embedICCProfile = true;
                aiOpts.compressed = true;
                doc.saveAs(aiFile, aiOpts);
                if (verifyExportedFile(aiFile)) {
                    summary.exportedFiles.push("AI (" + aiFile.name + ")");
                } else {
                    throw new Error("AI file was not created or is 0 bytes.");
                }
            } catch (eAi) {
                summary.failedFormats.push("AI: " + eAi.message);
                ErrorRegistry.log("Export AI", eAi, variationNum, cfg.generatorLabel, "", aiFile.fsName);
            }
        }

        return summary;
    }

    // ========================================================================

    // ========================================================================
    // MODULE 17: ADOBE STOCK & SHUTTERSTOCK CSV METADATA ASSISTANT
    // ========================================================================
// ========================================================================
    function escapeCSVCell(val) {
        var s = String(val === undefined || val === null ? "" : val);
        if (s.indexOf('"') !== -1 || s.indexOf(",") !== -1 || s.indexOf("\n") !== -1 || s.indexOf("\r") !== -1) {
            return '"' + s.replace(/"/g, '""') + '"';
        }
        return s;
    }

    /**
     * Deduplicates, trims, and caps comma-separated keywords
     */
    function sanitizeAndDeduplicateKeywords(rawKeywords, maxCount) {
        var parts = String(rawKeywords || "").split(",");
        var seen = {};
        var cleanList = [];
        var limit = Math.max(5, Math.min(50, parseInt(maxCount, 10) || 35));

        for (var i = 0; i < parts.length; i++) {
            var kw = parts[i].replace(/^\s+|\s+$/g, "");
            if (!kw) continue;
            var lower = kw.toLowerCase();
            if (!seen[lower]) {
                seen[lower] = true;
                cleanList.push(kw);
                if (cleanList.length >= limit) break;
            }
        }
        return cleanList.join(", ");
    }

    /**
     * Writes a contributor metadata CSV file according to the chosen template:
     *  - Template 0: Adobe Stock Schema (Filename, Title, Keywords, Category)
     *  - Template 1: Shutterstock Schema (Filename, Description, Keywords, Categories)
     *  - Template 2: Extended Studio Audit Schema (Filename, Title, Description, Keywords, Category, ArtworkType, GeneratorStyle, Dimensions, Formats)
     */
    function writeStockMetadataCSV(outFolder, rowsData, schemaIndex) {
        if (!outFolder || !outFolder.exists || !rowsData || rowsData.length === 0) return null;
        var suffix = (schemaIndex === 0) ? "AdobeStock_Metadata" : (schemaIndex === 1 ? "Shutterstock_Metadata" : "Extended_Studio_Metadata");
        var csvFile = getUniqueSafeFile(outFolder, "RI_Vector_Engine_X_" + suffix, "csv");
        csvFile.encoding = "UTF-8";

        if (!csvFile.open("w")) {
            throw new Error("Unable to open CSV file for writing: " + csvFile.fsName);
        }

        if (schemaIndex === 0) {
            csvFile.writeln("Filename,Title,Keywords,Category");
            for (var i = 0; i < rowsData.length; i++) {
                var r0 = rowsData[i];
                csvFile.writeln([
                    escapeCSVCell(r0.filename),
                    escapeCSVCell(r0.title),
                    escapeCSVCell(r0.keywords),
                    escapeCSVCell(r0.category)
                ].join(","));
            }
        } else if (schemaIndex === 1) {
            csvFile.writeln("Filename,Description,Keywords,Categories");
            for (var j = 0; j < rowsData.length; j++) {
                var r1 = rowsData[j];
                csvFile.writeln([
                    escapeCSVCell(r1.filename),
                    escapeCSVCell(r1.description),
                    escapeCSVCell(r1.keywords),
                    escapeCSVCell(r1.category)
                ].join(","));
            }
        } else {
            csvFile.writeln("Filename,Title,Description,Keywords,Category,ArtworkType,GeneratorStyle,Dimensions,ExportFormats");
            // Bug fix: renamed loop variable from k to ki2 to avoid shadowing outer for-in loop vars
            for (var ki2 = 0; ki2 < rowsData.length; ki2++) {
                var r2 = rowsData[ki2];
                csvFile.writeln([
                    escapeCSVCell(r2.filename),
                    escapeCSVCell(r2.title),
                    escapeCSVCell(r2.description),
                    escapeCSVCell(r2.keywords),
                    escapeCSVCell(r2.category),
                    escapeCSVCell(r2.artworkType),
                    escapeCSVCell(r2.generatorStyle),
                    escapeCSVCell(r2.dimensions),
                    escapeCSVCell(r2.formats)
                ].join(","));
            }
        }

        csvFile.close();
        return csvFile;
    }

    function writeBatchAuditReport(outFolder, linesArray) {
        if (!outFolder || !outFolder.exists) return null;
        var repFile = getUniqueSafeFile(outFolder, "RI_Vector_Engine_X_Generation_Report", "txt");
        repFile.encoding = "UTF-8";
        if (!repFile.open("w")) {
            throw new Error("Could not write generation report to folder: " + outFolder.fsName);
        }
        for (var i = 0; i < linesArray.length; i++) {
            repFile.writeln(linesArray[i]);
        }
        repFile.close();
        return repFile;
    }

    // ========================================================================

    // ========================================================================
    // MODULE 18: BUILT-IN SELF-TEST & DIAGNOSTICS SUITE
    // ========================================================================
// ========================================================================
    function runStudioSelfDiagnostics(outFolderPath) {
        var results = [];
        var passed = 0;
        var failed = 0;

        function recordTest(name, condition, detail) {
            if (condition) {
                passed++;
                results.push("[PASS] " + name + (detail ? " — " + detail : ""));
            } else {
                failed++;
                results.push("[FAIL] " + name + (detail ? " — " + detail : ""));
            }
        }

        // 1. Environment & Version Check
        var env = detectEnvironment();
        recordTest("Illustrator Host Detection", env.majorVersion > 0, env.appName + " v" + env.versionString + " (" + env.os + ")");

        // 2. Color Parsing & Harmony Check
        var hexOk = isValidHexColor("#00F5D4") && isValidHexColor("ABC") && !isValidHexColor("#ZZZZZZ");
        var rgbTest = hexToRGB("#FF8000");
        recordTest("HEX Validation & RGB Conversion", hexOk && rgbTest.r === 255 && rgbTest.g === 128 && rgbTest.b === 0, "R=255,G=128,B=0");

        // 3. Unit Conversion Check
        var inchPts = convertToPoints(2, 2);
        var mmPts = convertToPoints(25.4, 3);
        recordTest("Unit Conversion (in/mm to pt)", Math.abs(inchPts - 144) < 0.01 && Math.abs(mmPts - 72) < 0.01, "2in=144pt, 25.4mm=72pt");

        // 4. Reproducible Seeded PRNG Check
        var rngA = new SeededRNG(4242);
        var rngB = new SeededRNG(4242);
        var seqMatch = (rngA.next() === rngB.next()) && (rngA.next() === rngB.next()) && (rngA.next() === rngB.next());
        recordTest("Seeded PRNG Reproducibility", seqMatch, "Seed 4242 deterministic sequence verified");

        // 5. Wave & Field Calculation Check
        var nVal = fieldNoise2D(1.5, 2.5, 99);
        recordTest("Wave & Field Noise Bounds", !isNaN(nVal) && nVal >= 0 && nVal <= 1, "Value=" + (Math.round(nVal * 1000) / 1000));

        // 6. Preset Serialization & Safe Parsing Check
        try {
            var samplePreset = { primaryEngine: 2, width: 1920, height: 1080, useBg: true, c1: "#00F5D4" };
            var serialized = serializeStudioPreset(samplePreset);
            var roundTrip = parseStudioPreset(serialized);
            recordTest("Preset Round-Trip (No eval)", roundTrip.width === 1920 && roundTrip.c1 === "#00F5D4" && roundTrip.useBg === true, "INI key-value verified");
        } catch (ePreset) {
            recordTest("Preset Round-Trip (No eval)", false, ePreset.message);
        }

        // 7. Object Budget & Cancellation Checkpoint Check
        ExecutionController.reset(15);
        for (var q = 0; q < 30; q++) {
            if (ExecutionController.canContinue()) ExecutionController.recordObject();
        }
        recordTest("Object Budget Enforcement", ExecutionController.objectCounter === 15, "Capped at 15/15 objects");

        // 8. Temporary Document Creation, Primitive & Bezier Verification, and Safe Cleanup
        var tempDoc = null;
        try {
            var preDocCount = app.documents.length;
            var preset = new DocumentPreset();
            preset.width = 400;
            preset.height = 400;
            preset.colorMode = DocumentColorSpace.RGB;
            preset.units = RulerUnits.Points;
            preset.title = "RI_Diagnostic_Temp";

            tempDoc = app.documents.addDocument(DocumentColorSpace.RGB, preset);
            var grp = tempDoc.layers[0].groupItems.add();
            var cItem = createCircleItem(grp, 200, 200, 40, 400);
            var pItem = createRegularPolygonItem(grp, 200, 200, 60, 6, 0, 400);
            var bItem = createSmoothBezierPath(grp, [[50, 200], [150, 120], [250, 280], [350, 200]], false, 60, 400);
            var createdOk = (cItem !== null && pItem !== null && bItem !== null && grp.pathItems.length === 3);

            tempDoc.close(SaveOptions.DONOTSAVECHANGES);
            tempDoc = null;
            var postDocCount = app.documents.length;
            recordTest("Temp Document & Vector Primitive Creation", createdOk && (preDocCount === postDocCount), "Created 3 paths and closed cleanly");
        } catch (eDoc) {
            if (tempDoc) {
                try { tempDoc.close(SaveOptions.DONOTSAVECHANGES); } catch (eIgn) {}
            }
            recordTest("Temp Document & Vector Primitive Creation", false, eDoc.message);
        }

        // 9. Output Directory Access Check
        var outFol = new Folder(outFolderPath || Folder.desktop.fsName);
        recordTest("Output Folder Exists & Accessible", Boolean(outFol && outFol.exists), outFol ? outFol.fsName : "None");

        var header = "=== RI CREATIVE VECTOR ENGINE X — SELF-TEST REPORT ===\n" +
                     "Passed: " + passed + " | Failed: " + failed + "\n" +
                     "--------------------------------------------------------\n";
        return header + results.join("\n");
    }

    // ========================================================================

    // ========================================================================
    // MODULE 19: ULTRA-PREMIUM SCRIPTUI MASTER STUDIO (5 UNIFIED TABS)
    // ========================================================================
    function launchUltimateVectorStudioUI() {
        var envInfo = detectEnvironment();
        var win = new Window("dialog", STUDIO_BRAND + " — " + STUDIO_TITLE + " v" + STUDIO_VERSION);
        win.orientation = "column";
        win.alignChildren = ["fill", "top"];
        win.spacing = 8;
        win.margins = 12;
        win.preferredSize = [820, 640];

        var previewDocRef = null;

        // Top Branding Bar
        var topBanner = win.add("panel", undefined, undefined);
        topBanner.orientation = "row";
        topBanner.alignChildren = ["fill", "center"];
        topBanner.margins = [12, 8, 12, 8];

        var brandLeft = topBanner.add("group");
        brandLeft.orientation = "column";
        brandLeft.alignChildren = ["left", "top"];
        brandLeft.spacing = 2;
        var lblMainTitle = brandLeft.add("statictext", undefined, "RI CREATIVE AGENCY — ULTIMATE VECTOR STUDIO PRO");
        try { lblMainTitle.graphics.font = ScriptUI.newFont("dialog", "BOLD", 12); } catch (eFont) {}
        var lblSubTitle = brandLeft.add("statictext", undefined, "Enterprise Halftone Studio (50) • Fractal Art • Mesh Wave • Optical Moire • Parametric Geometry • Stock Automation");

        var brandRight = topBanner.add("group");
        brandRight.orientation = "row";
        brandRight.alignment = ["right", "center"];
        brandRight.spacing = 8;
        brandRight.add("statictext", undefined, "Quick Preset:");
        var factoryNames = [];
        for (var fk in FACTORY_PRESETS) {
            if (FACTORY_PRESETS.hasOwnProperty(fk)) factoryNames.push(fk);
        }
        var ddQuickPreset = brandRight.add("dropdownlist", [0, 0, 230, 24], factoryNames);
        ddQuickPreset.selection = 0;
        var btnLoadQuick = brandRight.add("button", [0, 0, 60, 24], "Load");

        // 5-Tab Structured Interface
        var tabs = win.add("tabbedpanel");
        tabs.alignChildren = ["fill", "fill"];
        tabs.preferredSize = [790, 480];

        /* ====================================================================
         * TAB 1: CREATIVE ENGINES & MATHEMATICAL PARAMETERS
         * ==================================================================== */
        var tabEngines = tabs.add("tab", undefined, "[1] Engines & Styles");
        tabEngines.orientation = "column";
        tabEngines.alignChildren = ["fill", "top"];
        tabEngines.spacing = 6;
        tabEngines.margins = 8;

        // Engine & Style Selector Panel
        var pnlEngSel = tabEngines.add("panel", undefined, "Creative Engine & Generative Algorithm Selection (95+ Styles)");
        pnlEngSel.orientation = "column";
        pnlEngSel.alignChildren = ["fill", "top"];
        pnlEngSel.spacing = 6;
        pnlEngSel.margins = [10, 12, 10, 8];

        var engRow1 = pnlEngSel.add("group");
        engRow1.orientation = "row";
        engRow1.spacing = 8;
        engRow1.add("statictext", [0, 0, 100, 20], "Creative Engine:");
        var ddPrimaryEngine = engRow1.add("dropdownlist", [0, 0, 310, 24], ENGINE_CATEGORIES);
        ddPrimaryEngine.selection = 0;

        engRow1.add("statictext", [0, 0, 100, 20], "Max Objects:");
        var etMaxObjects = engRow1.add("edittext", [0, 0, 65, 22], "8000");
        etMaxObjects.helpTip = "Safety cap on maximum generated vector paths to preserve system performance.";

        var engRow2 = pnlEngSel.add("group");
        engRow2.orientation = "row";
        engRow2.spacing = 8;
        engRow2.add("statictext", [0, 0, 100, 20], "Algorithm Style:");
        var ddStyle = engRow2.add("dropdownlist", [0, 0, 480, 24], PATTERN_50_STYLES);
        ddStyle.selection = 1;

        // Grid & Distribution Panel
        var pnlGrid = tabEngines.add("panel", undefined, "Grid, Sizing & Orientation Controls");
        pnlGrid.orientation = "column";
        pnlGrid.alignChildren = ["fill", "top"];
        pnlGrid.spacing = 5;
        pnlGrid.margins = [10, 12, 10, 8];

        var grRow1 = pnlGrid.add("group");
        grRow1.orientation = "row";
        grRow1.spacing = 8;
        grRow1.add("statictext", [0, 0, 85, 20], "Spacing X:");
        var etSpacingX = grRow1.add("edittext", [0, 0, 60, 22], "28");
        grRow1.add("statictext", [0, 0, 85, 20], "Spacing Y:");
        var etSpacingY = grRow1.add("edittext", [0, 0, 60, 22], "28");
        grRow1.add("statictext", [0, 0, 85, 20], "Min Size (pt):");
        var etMinSize = grRow1.add("edittext", [0, 0, 60, 22], "2");
        grRow1.add("statictext", [0, 0, 85, 20], "Max Size (pt):");
        var etMaxSize = grRow1.add("edittext", [0, 0, 60, 22], "20");

        var grRow2 = pnlGrid.add("group");
        grRow2.orientation = "row";
        grRow2.spacing = 8;
        grRow2.add("statictext", [0, 0, 85, 20], "Rotation (deg):");
        var etRotation = grRow2.add("edittext", [0, 0, 60, 22], "0");
        grRow2.add("statictext", [0, 0, 85, 20], "Density (%):");
        var etDensity = grRow2.add("edittext", [0, 0, 60, 22], "100");
        grRow2.add("statictext", [0, 0, 85, 20], "Pattern Scale %:");
        var etScale = grRow2.add("edittext", [0, 0, 60, 22], "100");
        grRow2.add("statictext", [0, 0, 85, 20], "Randomness %:");
        var etRandom = grRow2.add("edittext", [0, 0, 60, 22], "0");

        // Mathematical Modulation Panel
        var pnlMath = tabEngines.add("panel", undefined, "Wave, Fractal & Geometric Modulation");
        pnlMath.orientation = "column";
        pnlMath.alignChildren = ["fill", "top"];
        pnlMath.spacing = 5;
        pnlMath.margins = [10, 12, 10, 8];

        var mtRow1 = pnlMath.add("group");
        mtRow1.orientation = "row";
        mtRow1.spacing = 8;
        mtRow1.add("statictext", [0, 0, 85, 20], "Wave Amp:");
        var etWaveAmp = mtRow1.add("edittext", [0, 0, 60, 22], "25");
        mtRow1.add("statictext", [0, 0, 85, 20], "Wave Freq:");
        var etWaveFreq = mtRow1.add("edittext", [0, 0, 60, 22], "3.0");
        mtRow1.add("statictext", [0, 0, 85, 20], "Spiral Str:");
        var etSpiral = mtRow1.add("edittext", [0, 0, 60, 22], "3.0");
        mtRow1.add("statictext", [0, 0, 85, 20], "Fractal Depth:");
        var etFractal = mtRow1.add("edittext", [0, 0, 60, 22], "4");

        var mtRow2 = pnlMath.add("group");
        mtRow2.orientation = "row";
        mtRow2.spacing = 8;
        mtRow2.add("statictext", [0, 0, 85, 20], "Branch Angle:");
        var etBranchAngle = mtRow2.add("edittext", [0, 0, 60, 22], "28");
        mtRow2.add("statictext", [0, 0, 85, 20], "Decay (%):");
        var etDecay = mtRow2.add("edittext", [0, 0, 60, 22], "72");
        mtRow2.add("statictext", [0, 0, 85, 20], "Symmetry/Rings:");
        var etSymmetry = mtRow2.add("edittext", [0, 0, 60, 22], "6");
        mtRow2.add("statictext", [0, 0, 85, 20], "Vertices/Side:");
        var etVertices = mtRow2.add("edittext", [0, 0, 60, 22], "6");

        // Origin Center, Margin & Scatter Panel
        var pnlCenter = tabEngines.add("panel", undefined, "Canvas Center, Margin Fade & Organic Scatter");
        pnlCenter.orientation = "column";
        pnlCenter.alignChildren = ["fill", "top"];
        pnlCenter.spacing = 5;
        pnlCenter.margins = [10, 12, 10, 8];

        var cnRow1 = pnlCenter.add("group");
        cnRow1.orientation = "row";
        cnRow1.spacing = 8;
        cnRow1.add("statictext", [0, 0, 85, 20], "Center X (%):");
        var etCenterX = cnRow1.add("edittext", [0, 0, 60, 22], "50");
        cnRow1.add("statictext", [0, 0, 85, 20], "Center Y (%):");
        var etCenterY = cnRow1.add("edittext", [0, 0, 60, 22], "50");
        cnRow1.add("statictext", [0, 0, 85, 20], "Safe Margin (pt):");
        var etMargin = cnRow1.add("edittext", [0, 0, 60, 22], "40");
        cnRow1.add("statictext", [0, 0, 85, 20], "Edge Fade (%):");
        var etEdgeFade = cnRow1.add("edittext", [0, 0, 60, 22], "15");

        var cnRow2 = pnlCenter.add("group");
        cnRow2.orientation = "row";
        cnRow2.spacing = 8;
        cnRow2.add("statictext", [0, 0, 85, 20], "Random Seed:");
        var etSeed = cnRow2.add("edittext", [0, 0, 75, 22], "2048");
        var btnNewSeed = cnRow2.add("button", [0, 0, 95, 22], "New Seed");
        cnRow2.add("statictext", [0, 0, 100, 20], "Scatter Elements:");
        var etScatterCount = cnRow2.add("edittext", [0, 0, 55, 22], "350");
        var chkScatterCollision = cnRow2.add("checkbox", undefined, "Spatial Collision Grid");
        chkScatterCollision.value = true;

        /* ====================================================================
         * TAB 2: CANVAS & MULTI-LAYER SETUP
         * ==================================================================== */
        var tabCanvas = tabs.add("tab", undefined, "[2] Canvas & Layers");
        tabCanvas.orientation = "column";
        tabCanvas.alignChildren = ["fill", "top"];
        tabCanvas.spacing = 8;
        tabCanvas.margins = 8;

        var pnlDoc = tabCanvas.add("panel", undefined, "Artboard Canvas & Dimensions");
        pnlDoc.orientation = "column";
        pnlDoc.alignChildren = ["fill", "top"];
        pnlDoc.spacing = 8;
        pnlDoc.margins = [10, 14, 10, 10];

        var cvRow1 = pnlDoc.add("group");
        cvRow1.orientation = "row";
        cvRow1.spacing = 8;
        cvRow1.add("statictext", [0, 0, 105, 20], "Canvas Preset:");
        var ddArtPreset = cvRow1.add("dropdownlist", [0, 0, 230, 24], [
            "Landscape HD (1920 x 1080)",
            "Square Stock (1600 x 1600)",
            "Square Compact (1200 x 1200)",
            "Portrait Poster (1080 x 1350)",
            "4K UHD Stock (3840 x 2160)",
            "Print A4 (595 x 842 pt)",
            "Custom Dimensions"
        ]);
        ddArtPreset.selection = 0;
        cvRow1.add("statictext", [0, 0, 45, 20], "Units:");
        var ddUnits = cvRow1.add("dropdownlist", [0, 0, 130, 24], ["Pixels (px)", "Points (pt)", "Inches (in)", "Millimeters (mm)"]);
        ddUnits.selection = 0;

        var cvRow2 = pnlDoc.add("group");
        cvRow2.orientation = "row";
        cvRow2.spacing = 8;
        cvRow2.add("statictext", [0, 0, 105, 20], "Width:");
        var etWidth = cvRow2.add("edittext", [0, 0, 75, 22], "1920");
        cvRow2.add("statictext", [0, 0, 50, 20], "Height:");
        var etHeight = cvRow2.add("edittext", [0, 0, 75, 22], "1080");
        cvRow2.add("statictext", [0, 0, 75, 20], "Prefix:");
        var etPrefix = cvRow2.add("edittext", [0, 0, 160, 22], "RI_VectorStudio");

        var cvRow3 = pnlDoc.add("group");
        cvRow3.orientation = "row";
        cvRow3.spacing = 12;
        var chkUseBg = cvRow3.add("checkbox", undefined, "Create 01 Background Layer");
        chkUseBg.value = true;
        cvRow3.add("statictext", undefined, "Background HEX:");
        var etBgHex = cvRow3.add("edittext", [0, 0, 80, 22], "#0B0914");
        var chkClipArtboard = cvRow3.add("checkbox", undefined, "Clip Vector Artwork to Artboard Bounds");
        chkClipArtboard.value = true;

        // Multi-Layer Composition Panel
        var pnlComp = tabCanvas.add("panel", undefined, "Multi-Layer Composition Mode (Engine 7)");
        pnlComp.orientation = "column";
        pnlComp.alignChildren = ["fill", "top"];
        pnlComp.spacing = 8;
        pnlComp.margins = [10, 14, 10, 10];

        var cpRow1 = pnlComp.add("group");
        cpRow1.orientation = "row";
        cpRow1.spacing = 8;
        cpRow1.add("statictext", [0, 0, 125, 20], "Composition Mode:");
        var ddCompMode = cpRow1.add("dropdownlist", [0, 0, 360, 24], [
            "Mode 1 — Single Creative Engine (Pure Artwork)",
            "Mode 2 — Dual Engine Combination (Primary + Secondary Layer)",
            "Mode 3 — Multi-Layer Symphony (Primary + Secondary + Scatter Accents)"
        ]);
        ddCompMode.selection = 0;

        var cpRow2 = pnlComp.add("group");
        cpRow2.orientation = "row";
        cpRow2.spacing = 8;
        cpRow2.add("statictext", [0, 0, 125, 20], "Secondary Engine:");
        var ddSecondaryEngine = cpRow2.add("dropdownlist", [0, 0, 360, 24], ENGINE_CATEGORIES);
        ddSecondaryEngine.selection = 2;

        // Placed Image Underlay Panel
        var pnlImg = tabCanvas.add("panel", undefined, "Optional Reference Image Underlay (Non-Destructive)");
        pnlImg.orientation = "column";
        pnlImg.alignChildren = ["fill", "top"];
        pnlImg.spacing = 6;
        pnlImg.margins = [10, 12, 10, 10];
        var chkUseImg = pnlImg.add("checkbox", undefined, "Place Reference Image on '02 Reference Image Underlay' Layer");
        chkUseImg.value = false;
        var imgRow = pnlImg.add("group");
        imgRow.orientation = "row";
        imgRow.spacing = 8;
        var etImgPath = imgRow.add("edittext", [0, 0, 420, 22], "");
        var btnBrowseImg = imgRow.add("button", undefined, "Browse Image...");

        /* ====================================================================
         * TAB 3: COLOR STUDIO & APPEARANCE
         * ==================================================================== */
        var tabColor = tabs.add("tab", undefined, "[3] Color & Appearance");
        tabColor.orientation = "column";
        tabColor.alignChildren = ["fill", "top"];
        tabColor.spacing = 8;
        tabColor.margins = 8;

        var pnlColGrad = tabColor.add("panel", undefined, "Color Progression & Gradient Direction");
        pnlColGrad.orientation = "column";
        pnlColGrad.alignChildren = ["fill", "top"];
        pnlColGrad.spacing = 6;
        pnlColGrad.margins = [10, 12, 10, 8];

        var clRow1 = pnlColGrad.add("group");
        clRow1.orientation = "row";
        clRow1.spacing = 8;
        clRow1.add("statictext", [0, 0, 110, 20], "Color Progression:");
        var ddColorMode = clRow1.add("dropdownlist", [0, 0, 210, 24], ["Single Solid Color (Stop 1)", "Two-Color Gradient (Stops 1-2)", "Four-Color Multi-Gradient (Stops 1-4)"]);
        ddColorMode.selection = 2;
        clRow1.add("statictext", [0, 0, 60, 20], "Direction:");
        var ddGradDir = clRow1.add("dropdownlist", [0, 0, 180, 24], ["Horizontal (Left-Right)", "Vertical (Top-Bottom)", "Diagonal (TL-BR)", "Radial (Center-Out)", "Angular / Conic"]);
        ddGradDir.selection = 2;

        var pnlPalettes = tabColor.add("panel", undefined, "Curated Designer Palettes & Harmony Generators");
        pnlPalettes.orientation = "column";
        pnlPalettes.alignChildren = ["fill", "top"];
        pnlPalettes.spacing = 6;
        pnlPalettes.margins = [10, 12, 10, 8];

        var palKeys = [];
        for (var pk in COLOR_PALETTES) {
            if (COLOR_PALETTES.hasOwnProperty(pk)) palKeys.push(pk);
        }
        var plRow1 = pnlPalettes.add("group");
        plRow1.orientation = "row";
        plRow1.spacing = 8;
        plRow1.add("statictext", [0, 0, 110, 20], "Curated Palette:");
        var ddPalette = plRow1.add("dropdownlist", [0, 0, 210, 24], palKeys);
        ddPalette.selection = 0;
        var btnRandPal = plRow1.add("button", undefined, "Randomize HEX");

        var plRow2 = pnlPalettes.add("group");
        plRow2.orientation = "row";
        plRow2.spacing = 8;
        plRow2.add("statictext", [0, 0, 150, 20], "Harmonies from Stop 1:");
        var btnMono = plRow2.add("button", undefined, "Monochrome");
        var btnDuo = plRow2.add("button", undefined, "Duotone");
        var btnComp = plRow2.add("button", undefined, "Complementary");

        var pnlStops = tabColor.add("panel", undefined, "Active Color Stops (Editable RGB / HEX)");
        pnlStops.orientation = "row";
        pnlStops.alignChildren = ["left", "center"];
        pnlStops.spacing = 10;
        pnlStops.margins = [10, 12, 10, 10];

        pnlStops.add("statictext", undefined, "HEX 1:");
        var etC1 = pnlStops.add("edittext", [0, 0, 72, 22], "#00F5D4");
        pnlStops.add("statictext", undefined, "HEX 2:");
        var etC2 = pnlStops.add("edittext", [0, 0, 72, 22], "#00BBF9");
        pnlStops.add("statictext", undefined, "HEX 3:");
        var etC3 = pnlStops.add("edittext", [0, 0, 72, 22], "#9B5DE5");
        pnlStops.add("statictext", undefined, "HEX 4:");
        var etC4 = pnlStops.add("edittext", [0, 0, 72, 22], "#F15BB5");

        var pnlAppear = tabColor.add("panel", undefined, "Vector Element Appearance & Blending");
        pnlAppear.orientation = "column";
        pnlAppear.alignChildren = ["fill", "top"];
        pnlAppear.spacing = 6;
        pnlAppear.margins = [10, 12, 10, 8];

        var apRow1 = pnlAppear.add("group");
        apRow1.orientation = "row";
        apRow1.spacing = 12;
        var chkFill = apRow1.add("checkbox", undefined, "Apply Vector Fill");
        chkFill.value = true;
        var chkStroke = apRow1.add("checkbox", undefined, "Apply Vector Stroke");
        chkStroke.value = false;
        apRow1.add("statictext", undefined, "Stroke Width (pt):");
        var etStrokeW = apRow1.add("edittext", [0, 0, 50, 22], "1.2");
        apRow1.add("statictext", undefined, "Opacity (%):");
        var etOpacity = apRow1.add("edittext", [0, 0, 50, 22], "95");

        var apRow2 = pnlAppear.add("group");
        apRow2.orientation = "row";
        apRow2.spacing = 10;
        apRow2.add("statictext", undefined, "Blend Mode:");
        var ddBlend = apRow2.add("dropdownlist", [0, 0, 130, 24], ["Normal", "Multiply", "Screen", "Overlay", "Darken", "Lighten", "Difference"]);
        ddBlend.selection = 0;
        var chkTransBg = apRow2.add("checkbox", undefined, "Force Transparent Background");
        chkTransBg.value = false;

        /* ====================================================================
         * TAB 4: BATCH STUDIO & MULTI-FORMAT EXPORT
         * ==================================================================== */
        var tabBatch = tabs.add("tab", undefined, "[4] Batch & Stock Export");
        tabBatch.orientation = "column";
        tabBatch.alignChildren = ["fill", "top"];
        tabBatch.spacing = 6;
        tabBatch.margins = 8;

        var pnlBatch = tabBatch.add("panel", undefined, "Multi-Variation Batch Automation Studio (1 to 50 Variations)");
        pnlBatch.orientation = "column";
        pnlBatch.alignChildren = ["fill", "top"];
        pnlBatch.spacing = 6;
        pnlBatch.margins = [10, 12, 10, 8];

        var btRow1 = pnlBatch.add("group");
        btRow1.orientation = "row";
        btRow1.spacing = 10;
        var chkEnableBatch = btRow1.add("checkbox", undefined, "Enable Multi-Variation Batch Mode");
        chkEnableBatch.value = true;
        btRow1.add("statictext", undefined, "Batch Size (1-50):");
        var etBatchCount = btRow1.add("edittext", [0, 0, 50, 22], "5");
        var btnSet50 = btRow1.add("button", undefined, "Max 50 Variations");
        var chkCloseBatchDocs = btRow1.add("checkbox", undefined, "Close Temp Batch Docs After Export");
        chkCloseBatchDocs.value = false;

        var btRow2 = pnlBatch.add("group");
        btRow2.orientation = "row";
        btRow2.spacing = 12;
        var chkVaryStyle = btRow2.add("checkbox", undefined, "Cycle Styles"); chkVaryStyle.value = true;
        var chkVaryPalette = btRow2.add("checkbox", undefined, "Vary Palettes"); chkVaryPalette.value = true;
        var chkVarySeed = btRow2.add("checkbox", undefined, "Random Seeds"); chkVarySeed.value = true;
        var chkVaryRotation = btRow2.add("checkbox", undefined, "Rotate Angles"); chkVaryRotation.value = true;
        var chkVaryScale = btRow2.add("checkbox", undefined, "Vary Scale"); chkVaryScale.value = true;
        var chkVaryWave = btRow2.add("checkbox", undefined, "Vary Waves"); chkVaryWave.value = true;

        var pnlExport = tabBatch.add("panel", undefined, "Multi-Format Export Studio (Disk Verification)");
        pnlExport.orientation = "column";
        pnlExport.alignChildren = ["fill", "top"];
        pnlExport.spacing = 6;
        pnlExport.margins = [10, 12, 10, 8];

        var exRow1 = pnlExport.add("group");
        exRow1.orientation = "row";
        exRow1.spacing = 12;
        var chkExpAI = exRow1.add("checkbox", undefined, "AI (Master)"); chkExpAI.value = true;
        var chkExpSVG = exRow1.add("checkbox", undefined, "SVG (Vector)"); chkExpSVG.value = true;
        var chkExpPNG = exRow1.add("checkbox", undefined, "PNG (Raster)"); chkExpPNG.value = true;
        var chkExpJPG = exRow1.add("checkbox", undefined, "JPEG (High-Res)"); chkExpJPG.value = true;
        var chkExpEPS = exRow1.add("checkbox", undefined, "EPS (Vector)"); chkExpEPS.value = true;
        var chkExpPDF = exRow1.add("checkbox", undefined, "PDF (Acrobat)"); chkExpPDF.value = true;

        var exRow2 = pnlExport.add("group");
        exRow2.orientation = "row";
        exRow2.spacing = 8;
        exRow2.add("statictext", undefined, "Raster Resolution:");
        var ddRasterRes = exRow2.add("dropdownlist", [0, 0, 215, 24], [
            "300 PPI (Print & Stock — 416.7%)",
            "600 PPI (Ultra-HD Print — 833.3%)",
            "4K UHD (3840 px Longest Edge)",
            "8K UHD (7680 px Longest Edge)",
            "Custom Scale (%)"
        ]);
        ddRasterRes.selection = 2; // Default 4K UHD
        exRow2.add("statictext", undefined, "Scale %:");
        var etPngScale = exRow2.add("edittext", [0, 0, 52, 22], "416.67");
        exRow2.add("statictext", undefined, "JPG Quality:");
        var etJpgQuality = exRow2.add("edittext", [0, 0, 42, 22], "100");

        var exRow3 = pnlExport.add("group");
        exRow3.orientation = "row";
        exRow3.spacing = 8;
        exRow3.add("statictext", undefined, "Output Directory:");
        var etOutFolder = exRow3.add("edittext", [0, 0, 360, 22], Folder.desktop.fsName);
        var btnBrowseOut = exRow3.add("button", undefined, "Browse Folder...");

        var pnlMeta = tabBatch.add("panel", undefined, "Adobe Stock & Shutterstock Contributor CSV Metadata Assistant");
        pnlMeta.orientation = "column";
        pnlMeta.alignChildren = ["fill", "top"];
        pnlMeta.spacing = 5;
        pnlMeta.margins = [10, 10, 10, 8];

        var mdRow1 = pnlMeta.add("group");
        mdRow1.orientation = "row";
        mdRow1.spacing = 8;
        var chkExportCSV = mdRow1.add("checkbox", undefined, "Export Contributor Metadata CSV with Batch");
        chkExportCSV.value = true;
        mdRow1.add("statictext", undefined, "Schema:");
        var ddCsvSchema = mdRow1.add("dropdownlist", [0, 0, 180, 24], ["Adobe Stock CSV", "Shutterstock CSV", "Extended Audit CSV"]);
        ddCsvSchema.selection = 0;

        var mdRow2 = pnlMeta.add("group");
        mdRow2.orientation = "row";
        mdRow2.spacing = 8;
        mdRow2.add("statictext", [0, 0, 80, 20], "Title:");
        var etMetaTitle = mdRow2.add("edittext", [0, 0, 450, 22], "Abstract Generative Vector Pattern Background");

        var mdRow3 = pnlMeta.add("group");
        mdRow3.orientation = "row";
        mdRow3.spacing = 8;
        mdRow3.add("statictext", [0, 0, 80, 20], "Keywords:");
        var etMetaKeywords = mdRow3.add("edittext", [0, 0, 450, 22], "vector, pattern, abstract, background, geometric, halftone, wave, modern, illustration, design, line, texture");

        /* ====================================================================
         * TAB 5: PRESETS, DIAGNOSTICS & LOGS
         * ==================================================================== */
        var tabPresets = tabs.add("tab", undefined, "[5] Presets & Logs");
        tabPresets.orientation = "column";
        tabPresets.alignChildren = ["fill", "top"];
        tabPresets.spacing = 8;
        tabPresets.margins = 8;

        var pnlPr = tabPresets.add("panel", undefined, "Preset Management (Safe INI Serializer — No eval)");
        pnlPr.orientation = "column";
        pnlPr.alignChildren = ["fill", "top"];
        pnlPr.spacing = 8;
        pnlPr.margins = [10, 12, 10, 10];

        var prRow1 = pnlPr.add("group");
        prRow1.orientation = "row";
        prRow1.spacing = 8;
        prRow1.add("statictext", undefined, "Factory Preset:");
        var ddFactoryPresets = prRow1.add("dropdownlist", [0, 0, 280, 24], factoryNames);
        ddFactoryPresets.selection = 0;
        var btnApplyPreset = prRow1.add("button", undefined, "Load Preset");

        var prRow2 = pnlPr.add("group");
        prRow2.orientation = "row";
        prRow2.spacing = 10;
        var btnSavePresetFile = prRow2.add("button", [0, 0, 150, 26], "Save Preset to Disk (.ini)");
        var btnLoadPresetFile = prRow2.add("button", [0, 0, 150, 26], "Load Preset from Disk (.ini)");
        var btnResetStudio = prRow2.add("button", [0, 0, 160, 26], "Reset Controls to Default");

        var pnlDiag = tabPresets.add("panel", undefined, "Built-In Self-Test Diagnostics & Error Log");
        pnlDiag.orientation = "column";
        pnlDiag.alignChildren = ["fill", "top"];
        pnlDiag.spacing = 6;
        pnlDiag.margins = [10, 12, 10, 10];

        var dgRow1 = pnlDiag.add("group");
        dgRow1.orientation = "row";
        dgRow1.spacing = 10;
        var btnRunSelfTest = dgRow1.add("button", undefined, "Run Built-In Self-Test Suite");
        var btnViewErrors = dgRow1.add("button", undefined, "Refresh Error Log");
        var btnClearErrors = dgRow1.add("button", undefined, "Clear Log");

        var etDiagLog = pnlDiag.add("edittext", [0, 0, 540, 180], "Click 'Run Built-In Self-Test Suite' to verify PRNG reproducibility, color math, units, and temporary vector creation.", { multiline: true, readonly: true, scrolling: true });

        // ====================================================================
        // DYNAMIC STYLE POPULATION
        // ====================================================================
        function updateStyleDropdown(engineIdx) {
            ddStyle.removeAll();
            var list = [];
            if (engineIdx === 0) list = PATTERN_50_STYLES;
            else if (engineIdx === 1) list = FRACTAL_STYLES;
            else if (engineIdx === 2) list = WAVE_STYLES;
            else if (engineIdx === 3) list = ILLUSION_STYLES;
            else if (engineIdx === 4) list = GEOMETRY_STYLES;
            else if (engineIdx === 5) list = SCATTER_STYLES;

            for (var i = 0; i < list.length; i++) {
                ddStyle.add("item", list[i]);
            }
            ddStyle.selection = 0;
        }

        ddPrimaryEngine.onChange = function () {
            if (ddPrimaryEngine.selection) {
                updateStyleDropdown(ddPrimaryEngine.selection.index);
            }
        };

        // ====================================================================
        // BOTTOM STATUS BAR & ACTION BAR
        // ====================================================================
        var progPanel = win.add("panel", undefined, undefined);
        progPanel.orientation = "column";
        progPanel.alignChildren = ["fill", "top"];
        progPanel.spacing = 4;
        progPanel.margins = [10, 8, 10, 8];

        var progRow = progPanel.add("group");
        progRow.orientation = "row";
        progRow.alignChildren = ["fill", "center"];
        var progBar = progRow.add("progressbar", [0, 0, 600, 14], 0, 100);
        var btnStopBatch = progRow.add("button", [0, 0, 140, 22], "Cancel Operation");
        btnStopBatch.enabled = false;

        var lblStatus = progPanel.add("statictext", [0, 0, 750, 20], "Ready. Choose an engine or Factory Preset, then click Preview or Generate & Export.");

        var footerRow = win.add("group");
        footerRow.orientation = "row";
        footerRow.alignment = ["right", "center"];
        footerRow.spacing = 8;

        var btnRandAll = footerRow.add("button", undefined, "Randomize All");
        var btnQuickTest = footerRow.add("button", undefined, "Self-Test");
        var btnPreview = footerRow.add("button", undefined, "Instant Preview (New Doc)");
        var btnGenerate = footerRow.add("button", undefined, "Generate & Export", { name: "ok" });
        var btnCloseStudio = footerRow.add("button", undefined, "Close Studio", { name: "cancel" });

        // ====================================================================
        // SETTINGS COLLECTION
        // ====================================================================
        function getDropdownIndex(dd, defaultIdx) {
            if (!dd || dd.selection === null || dd.selection === undefined) return (defaultIdx !== undefined) ? defaultIdx : 0;
            if (typeof dd.selection === "number") return dd.selection;
            if (dd.selection && typeof dd.selection.index === "number") return dd.selection.index;
            return (defaultIdx !== undefined) ? defaultIdx : 0;
        }

        function getDropdownText(dd, defaultText) {
            if (!dd || dd.selection === null || dd.selection === undefined) return defaultText || "";
            if (dd.selection && typeof dd.selection.text === "string") return dd.selection.text;
            if (typeof dd.selection === "string") return dd.selection;
            if (typeof dd.selection === "number" && dd.items && dd.items[dd.selection] && dd.items[dd.selection].text) {
                return dd.items[dd.selection].text;
            }
            return defaultText || "";
        }

        function collectStudioSettings(isDraftPreview) {
            var uIdx = getDropdownIndex(ddUnits, 0);
            var rawW = clampNum(etWidth.text, 50, 16000, 1920);
            var rawH = clampNum(etHeight.text, 50, 16000, 1080);
            var wPts = clampNum(convertToPoints(rawW, uIdx), 50, 16383, 1920);
            var hPts = clampNum(convertToPoints(rawH, uIdx), 50, 16383, 1080);

            var rawMargin = clampNum(etMargin.text, 0, 2000, 40);
            var marginPts = clampNum(convertToPoints(rawMargin, uIdx), 0, Math.min(wPts, hPts) * 0.4, 40);

            var minSz = clampNum(etMinSize.text, 0.5, 500, 2);
            var maxSz = clampNum(etMaxSize.text, minSz + 0.5, 800, 20);
            var minSzPts = Math.max(0.5, convertToPoints(minSz, uIdx));
            var maxSzPts = Math.max(minSzPts + 0.5, convertToPoints(maxSz, uIdx));

            var rawSpX = clampNum(etSpacingX.text, 1, 1000, 28);
            var rawSpY = clampNum(etSpacingY.text, 1, 1000, 28);
            var spXPts = Math.max(4, convertToPoints(rawSpX, uIdx));
            var spYPts = Math.max(4, convertToPoints(rawSpY, uIdx));

            var budget = clampNum(etMaxObjects.text, 50, 25000, 8000);
            if (isDraftPreview) {
                budget = Math.min(budget, 2000);
            }

            var pEng = getDropdownIndex(ddPrimaryEngine, 0);
            var sEng = getDropdownIndex(ddSecondaryEngine, 2);
            var curStyleIdx = getDropdownIndex(ddStyle, 0);

            var genLabel = getDropdownText(ddStyle, ENGINE_CATEGORIES[pEng] || "Halftone");

            return {
                compMode: getDropdownIndex(ddCompMode, 0),
                primaryEngine: pEng,
                secondaryEngine: sEng,
                generatorLabel: genLabel,
                styleIndex: curStyleIdx,
                halftoneStyle: curStyleIdx,
                fractalStyle: curStyleIdx,
                waveStyle: curStyleIdx,
                illusionStyle: curStyleIdx,
                geoStyle: curStyleIdx,
                scatterStyle: curStyleIdx,
                scatterPrimitive: 3, // Mixed
                width: rawW,
                height: rawH,
                units: uIdx,
                widthPts: wPts,
                heightPts: hPts,
                marginPts: marginPts,
                minSizePts: minSzPts,
                maxSizePts: maxSzPts,
                spacingXPts: spXPts,
                spacingYPts: spYPts,
                density: clampNum(etDensity.text, 1, 100, 100),
                rotation: parseFloat(etRotation.text) || 0,
                scale: clampNum(etScale.text, 10, 1000, 100),
                randomness: clampNum(etRandom.text, 0, 100, 0),
                waveAmp: clampNum(etWaveAmp.text, 0, 500, 25),
                waveFreq: clampNum(etWaveFreq.text, 0.1, 50, 3.0),
                wavePhase: 0,
                waveLines: 36,
                curveSmooth: 60,
                spiralStr: clampNum(etSpiral.text, 0.1, 50, 3.0),
                fractalDepth: Math.round(clampNum(etFractal.text, 1, 7, 4)),
                branchCount: 2,
                branchAngle: clampNum(etBranchAngle.text, 5, 120, 28),
                lengthDecay: clampNum(etDecay.text, 20, 95, 72),
                symmetry: Math.round(clampNum(etSymmetry.text, 2, 24, 6)),
                illusionRings: Math.round(clampNum(etSymmetry.text, 2, 80, 28)),
                illusionContrast: clampNum(etVertices.text, 10, 100, 80),
                geoVertices: Math.round(clampNum(etVertices.text, 3, 20, 6)),
                geoSideLen: 26,
                scatterCount: Math.round(clampNum(etScatterCount.text, 10, 3000, 350)),
                scatterClusters: 4,
                scatterCollision: chkScatterCollision.value,
                edgeExclusion: 15,
                edgeFade: clampNum(etEdgeFade.text, 0, 50, 15),
                centerX: clampNum(etCenterX.text, 0, 100, 50),
                centerY: clampNum(etCenterY.text, 0, 100, 50),
                offsetXPts: 0,
                offsetYPts: 0,
                useBg: chkUseBg.value,
                bgHex: normalizeHexColor(etBgHex.text, "#0B0914"),
                clipArtboard: chkClipArtboard.value,
                prefix: etPrefix.text.replace(/[^a-zA-Z0-9_-]/g, "") || "RI_VectorStudio",
                useImageUnderlay: chkUseImg.value,
                imagePath: etImgPath.text,
                colorMode: getDropdownIndex(ddColorMode, 2),
                gradDir: getDropdownIndex(ddGradDir, 2),
                c1: normalizeHexColor(etC1.text, "#00F5D4"),
                c2: normalizeHexColor(etC2.text, "#00BBF9"),
                c3: normalizeHexColor(etC3.text, "#9B5DE5"),
                c4: normalizeHexColor(etC4.text, "#F15BB5"),
                useFill: chkFill.value,
                useStroke: chkStroke.value,
                strokeWidth: Math.max(0.1, parseFloat(etStrokeW.text) || 1.2),
                opacity: clampNum(etOpacity.text, 1, 100, 95),
                blendMode: getDropdownIndex(ddBlend, 0),
                transparentBg: chkTransBg.value,
                enableBatch: chkEnableBatch.value,
                batchCount: Math.round(clampNum(etBatchCount.text, 1, 50, 1)),
                closeBatchDocs: chkCloseBatchDocs.value,
                varyStyle: chkVaryStyle.value,
                varyPalette: chkVaryPalette.value,
                varySeed: chkVarySeed.value,
                varyRotation: chkVaryRotation.value,
                varyScale: chkVaryScale.value,
                varyWave: chkVaryWave.value,
                expAI: chkExpAI.value,
                expSVG: chkExpSVG.value,
                expPNG: chkExpPNG.value,
                expJPG: chkExpJPG.value,
                expEPS: chkExpEPS.value,
                expPDF: chkExpPDF.value,
                rasterResMode: getDropdownIndex(ddRasterRes, 2),
                rasterResIndex: getDropdownIndex(ddRasterRes, 2),
                pngScale: parseFloat(etPngScale.text) || 416.67,
                jpgQuality: clampNum(etJpgQuality.text, 10, 100, 100),
                outFolder: etOutFolder.text || Folder.desktop.fsName,
                exportCSV: chkExportCSV.value,
                csvSchema: getDropdownIndex(ddCsvSchema, 0),
                metaTitle: etMetaTitle.text,
                metaDesc: "Abstract generative vector artwork pattern background.",
                metaCategory: "Graphic Resources",
                metaKeywords: etMetaKeywords.text,
                metaMaxKw: 30,
                seed: parseInt(etSeed.text, 10) || 2048,
                maxObjects: budget
            };
        }

        function applyPresetToUI(preset) {
            if (!preset) return;
            if (typeof preset.primaryEngine === "number" && preset.primaryEngine < ENGINE_CATEGORIES.length) {
                ddPrimaryEngine.selection = preset.primaryEngine;
                updateStyleDropdown(preset.primaryEngine);
            }
            if (typeof preset.styleIndex === "number" && preset.styleIndex < ddStyle.items.length) {
                ddStyle.selection = preset.styleIndex;
            }
            if (typeof preset.width !== "undefined") etWidth.text = String(preset.width);
            if (typeof preset.height !== "undefined") etHeight.text = String(preset.height);
            if (typeof preset.units !== "undefined") ddUnits.selection = preset.units;
            if (typeof preset.margin !== "undefined") etMargin.text = String(preset.margin);
            if (typeof preset.spacingX !== "undefined") etSpacingX.text = String(preset.spacingX);
            if (typeof preset.spacingY !== "undefined") etSpacingY.text = String(preset.spacingY);
            if (typeof preset.minSize !== "undefined") etMinSize.text = String(preset.minSize);
            if (typeof preset.maxSize !== "undefined") etMaxSize.text = String(preset.maxSize);
            if (typeof preset.density !== "undefined") etDensity.text = String(preset.density);
            if (typeof preset.rotation !== "undefined") etRotation.text = String(preset.rotation);
            if (typeof preset.scale !== "undefined") etScale.text = String(preset.scale);
            if (typeof preset.randomness !== "undefined") etRandom.text = String(preset.randomness);
            if (typeof preset.waveAmp !== "undefined") etWaveAmp.text = String(preset.waveAmp);
            if (typeof preset.waveFreq !== "undefined") etWaveFreq.text = String(preset.waveFreq);
            if (typeof preset.spiralStr !== "undefined") etSpiral.text = String(preset.spiralStr);
            if (typeof preset.fractalDepth !== "undefined") etFractal.text = String(preset.fractalDepth);
            if (typeof preset.branchAngle !== "undefined") etBranchAngle.text = String(preset.branchAngle);
            if (typeof preset.lengthDecay !== "undefined") etDecay.text = String(preset.lengthDecay);
            if (typeof preset.symmetry !== "undefined") etSymmetry.text = String(preset.symmetry);
            if (typeof preset.geoVertices !== "undefined") etVertices.text = String(preset.geoVertices);
            if (typeof preset.centerX !== "undefined") etCenterX.text = String(preset.centerX);
            if (typeof preset.centerY !== "undefined") etCenterY.text = String(preset.centerY);
            if (typeof preset.edgeFade !== "undefined") etEdgeFade.text = String(preset.edgeFade);
            if (typeof preset.bgHex !== "undefined") etBgHex.text = preset.bgHex;
            if (typeof preset.useBg !== "undefined") chkUseBg.value = Boolean(preset.useBg);
            if (typeof preset.c1 !== "undefined") etC1.text = preset.c1;
            if (typeof preset.c2 !== "undefined") etC2.text = preset.c2;
            if (typeof preset.c3 !== "undefined") etC3.text = preset.c3;
            if (typeof preset.c4 !== "undefined") etC4.text = preset.c4;
            if (typeof preset.colorMode !== "undefined") ddColorMode.selection = preset.colorMode;
            if (typeof preset.gradDir !== "undefined") ddGradDir.selection = preset.gradDir;
            if (typeof preset.useFill !== "undefined") chkFill.value = Boolean(preset.useFill);
            if (typeof preset.useStroke !== "undefined") chkStroke.value = Boolean(preset.useStroke);
            if (typeof preset.strokeWidth !== "undefined") etStrokeW.text = String(preset.strokeWidth);
            if (typeof preset.opacity !== "undefined") etOpacity.text = String(preset.opacity);
            if (typeof preset.seed !== "undefined") etSeed.text = String(preset.seed);
            if (typeof preset.compMode !== "undefined") ddCompMode.selection = preset.compMode;
            lblStatus.text = "Loaded preset successfully.";
        }

        // Event Handlers
        btnLoadQuick.onClick = function () {
            if (ddQuickPreset.selection) {
                var p = FACTORY_PRESETS[ddQuickPreset.selection.text];
                if (p) applyPresetToUI(p);
            }
        };

        btnApplyPreset.onClick = function () {
            if (ddFactoryPresets.selection) {
                var p = FACTORY_PRESETS[ddFactoryPresets.selection.text];
                if (p) applyPresetToUI(p);
            }
        };

        btnNewSeed.onClick = function () {
            etSeed.text = String(Math.floor(Math.random() * 89999 + 10000));
        };

        ddPalette.onChange = function () {
            if (ddPalette.selection) {
                var p = COLOR_PALETTES[ddPalette.selection.text];
                if (p) {
                    etC1.text = p.c1; etC2.text = p.c2; etC3.text = p.c3; etC4.text = p.c4;
                    etBgHex.text = p.bg;
                }
            }
        };

        btnRandPal.onClick = function () {
            function rf() {
                var h = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
                while (h.length < 6) h = "0" + h;
                return "#" + h;
            }
            etC1.text = rf(); etC2.text = rf(); etC3.text = rf(); etC4.text = rf();
        };

        btnMono.onClick = function () {
            var h = computeHarmonyPalette(etC1.text, 0);
            etC2.text = h.c2; etC3.text = h.c3; etC4.text = h.c4;
        };
        btnDuo.onClick = function () {
            var h = computeHarmonyPalette(etC1.text, 1);
            etC2.text = h.c2; etC3.text = h.c3; etC4.text = h.c4;
        };
        btnComp.onClick = function () {
            var h = computeHarmonyPalette(etC1.text, 2);
            etC2.text = h.c2; etC3.text = h.c3; etC4.text = h.c4;
        };

        btnBrowseImg.onClick = function () {
            var f = File.openDialog("Select Reference Image", "Image Files:*.jpg;*.jpeg;*.png;*.tif;*.tiff;*.psd;*.*");
            if (f) {
                etImgPath.text = f.fsName;
                chkUseImg.value = true;
            }
        };

        btnBrowseOut.onClick = function () {
            var fol = Folder.selectDialog("Select Output Directory for Batch Exports");
            if (fol) {
                etOutFolder.text = fol.fsName;
            }
        };

        btnSet50.onClick = function () {
            etBatchCount.text = "50";
        };

        ddArtPreset.onChange = function () {
            if (!ddArtPreset.selection) return;
            var idx = ddArtPreset.selection.index;
            ddUnits.selection = 0; // Pixels
            switch (idx) {
                case 0: etWidth.text = "1920"; etHeight.text = "1080"; break; // HD Landscape
                case 1: etWidth.text = "1600"; etHeight.text = "1600"; break; // Square Stock
                case 2: etWidth.text = "1200"; etHeight.text = "1200"; break; // Compact Square
                case 3: etWidth.text = "1080"; etHeight.text = "1350"; break; // Portrait Poster
                case 4: etWidth.text = "3840"; etHeight.text = "2160"; break; // 4K UHD
                case 5: etWidth.text = "595"; etHeight.text = "842"; ddUnits.selection = 1; break; // Print A4 (pt)
            }
        };

        btnSavePresetFile.onClick = function () {
            var s = collectStudioSettings(false);
            var f = File.saveDialog("Save Ultimate Studio Preset (.ini)", "Preset Files:*.ini");
            if (f) {
                if (f.name.indexOf(".ini") === -1) f = new File(f.fsName + ".ini");
                f.open("w");
                f.write(serializeStudioPreset(s));
                f.close();
                showStudioDialog("Preset Saved", "Preset successfully saved to:\n" + f.fsName, false);
            }
        };

        btnLoadPresetFile.onClick = function () {
            var f = File.openDialog("Load Ultimate Studio Preset (.ini)", "Preset Files:*.ini");
            if (f && f.exists) {
                f.open("r");
                var content = f.read();
                f.close();
                var p = parseStudioPreset(content);
                applyPresetToUI(p);
                showStudioDialog("Preset Loaded", "Preset loaded successfully from:\n" + f.name, false);
            }
        };

        btnResetStudio.onClick = function () {
            var confirmReset = showStudioDialog("Reset Studio Defaults", "Restore all parameters to factory defaults?", true);
            if (confirmReset) {
                applyPresetToUI(FACTORY_PRESETS["Default — Classic Round Halftone"]);
            }
        };

        btnRunSelfTest.onClick = function () {
            etDiagLog.text = "Executing comprehensive test suite across all 6 creative engines...\n";
            win.update();
            var report = runStudioSelfDiagnostics(etOutFolder.text);
            etDiagLog.text = report;
        };

        btnViewErrors.onClick = function () {
            if (ErrorRegistry.entries.length === 0) {
                etDiagLog.text = "Error Registry is clean. No warnings or errors logged.";
            } else {
                var out = "=== ERROR & DIAGNOSTICS REGISTRY ===\n";
                for (var i = 0; i < ErrorRegistry.entries.length; i++) {
                    var e = ErrorRegistry.entries[i];
                    out += "[" + e.timestamp + "] " + e.context + " (Var #" + e.variationIndex + "): " + e.message + "\n";
                }
                etDiagLog.text = out;
            }
        };

        btnClearErrors.onClick = function () {
            ErrorRegistry.clear();
            etDiagLog.text = "Log cleared.";
        };

        btnRandAll.onClick = function () {
            // Randomize engine/style, seed, palette, rotation
            var pEng = Math.floor(Math.random() * ENGINE_CATEGORIES.length);
            ddPrimaryEngine.selection = pEng;
            updateStyleDropdown(pEng);
            ddStyle.selection = Math.floor(Math.random() * ddStyle.items.length);
            etSeed.text = String(Math.floor(Math.random() * 89999 + 10000));
            ddPalette.selection = Math.floor(Math.random() * ddPalette.items.length);
            ddGradDir.selection = Math.floor(Math.random() * 5);
            etRotation.text = String(Math.floor(Math.random() * 360));
            lblStatus.text = "Studio parameters randomized! Click 'Instant Preview' to inspect.";
        };

        btnQuickTest.onClick = function () {
            tabs.selection = tabPresets;
            btnRunSelfTest.notify();
        };

        btnStopBatch.onClick = function () {
            ExecutionController.cancelRequested = true;
            lblStatus.text = "Cancellation requested. Halting batch safely...";
        };

        btnPreview.onClick = function () {
            var cfg = collectStudioSettings(true);
            lblStatus.text = "Generating instant vector preview (" + cfg.generatorLabel + ")...";
            progBar.value = 30;
            win.update();

            try {
                if (previewDocRef) {
                    try { previewDocRef.close(SaveOptions.DONOTSAVECHANGES); } catch (eIgn) {}
                    previewDocRef = null;
                }
                var res = buildVectorStudioDocument(cfg, cfg.seed, "RI_VectorStudio_Preview");
                previewDocRef = res.doc;
                progBar.value = 100;
                lblStatus.text = "Preview ready! Created " + res.objectCount + " vector paths (" + cfg.generatorLabel + ").";
            } catch (ePrev) {
                progBar.value = 0;
                ErrorRegistry.log("Preview Generation", ePrev, 0, cfg.generatorLabel);
                lblStatus.text = "Preview failed: " + ePrev.message;
                showStudioDialog("Preview Error", "Could not generate preview:\n" + ePrev.message, false);
            }
        };

        btnGenerate.onClick = function () {
            var cfg = collectStudioSettings(false);

            if (!isValidHexColor(etBgHex.text) || !isValidHexColor(etC1.text) || !isValidHexColor(etC2.text) || !isValidHexColor(etC3.text) || !isValidHexColor(etC4.text)) {
                var proceedHex = showStudioDialog(
                    "HEX Color Notice",
                    "One or more HEX fields had non-standard characters and will use safe fallbacks.\n\nProceed with generation?",
                    true
                );
                if (!proceedHex) return;
            }

            if (!cfg.useFill && !cfg.useStroke) {
                chkFill.value = true;
                cfg.useFill = true;
            }

            var anyExport = cfg.expAI || cfg.expSVG || cfg.expPNG || cfg.expJPG || cfg.expEPS || cfg.expPDF;
            var outFolderObj = new Folder(cfg.outFolder);
            if ((anyExport || cfg.exportCSV) && (!outFolderObj || !outFolderObj.exists)) {
                showStudioDialog("Invalid Output Folder", "The selected output folder does not exist:\n" + cfg.outFolder + "\n\nPlease select a valid folder in Tab 4.", false);
                tabs.selection = tabBatch;
                return;
            }

            var parsedBatch = Math.round(clampNum(etBatchCount.text, 1, 50, 1));
            var totalBatch = cfg.enableBatch ? parsedBatch : 1;
            btnStopBatch.enabled = true;
            progBar.value = 0;
            lblStatus.text = "Starting generation of " + totalBatch + " variation(s)...";
            win.update();

            var auditLines = [
                "====================================================================",
                STUDIO_BRAND + " — " + STUDIO_TITLE + " v" + STUDIO_VERSION + " BATCH REPORT",
                "Timestamp : " + (new Date()).toString(),
                "Generator : " + cfg.generatorLabel,
                "Variations: " + totalBatch,
                "===================================================================="
            ];

            var paletteKeys = [];
            for (var pk in COLOR_PALETTES) {
                if (COLOR_PALETTES.hasOwnProperty(pk)) paletteKeys.push(pk);
            }

            var csvRows = [];
            var completedCount = 0;
            var failedCount = 0;

            for (var v = 1; v <= totalBatch; v++) {
                if (ExecutionController.cancelRequested) {
                    auditLines.push("[CANCELLED] User stopped batch before Variation #" + v);
                    break;
                }

                var vCfg = {};
                for (var prop in cfg) {
                    if (cfg.hasOwnProperty(prop)) vCfg[prop] = cfg[prop];
                }

                var vSeed = cfg.seed + (v - 1) * 997 + v * 37;
                if (v > 1) {
                    var bRng = new SeededRNG(vSeed);
                    if (cfg.varySeed) vCfg.seed = vSeed;

                    if (cfg.varyStyle) {
                        vCfg.halftoneStyle = (cfg.halftoneStyle + (v - 1)) % PATTERN_50_STYLES.length;
                        vCfg.styleIndex = vCfg.halftoneStyle;
                        vCfg.fractalStyle = (cfg.fractalStyle + (v - 1)) % FRACTAL_STYLES.length;
                        vCfg.waveStyle = (cfg.waveStyle + (v - 1)) % WAVE_STYLES.length;
                        vCfg.illusionStyle = (cfg.illusionStyle + (v - 1)) % ILLUSION_STYLES.length;
                        vCfg.geoStyle = (cfg.geoStyle + (v - 1)) % GEOMETRY_STYLES.length;
                        vCfg.scatterStyle = (cfg.scatterStyle + (v - 1)) % SCATTER_STYLES.length;

                        if (vCfg.primaryEngine === 0) vCfg.generatorLabel = PATTERN_50_STYLES[vCfg.halftoneStyle];
                        else if (vCfg.primaryEngine === 1) vCfg.generatorLabel = FRACTAL_STYLES[vCfg.fractalStyle];
                        else if (vCfg.primaryEngine === 2) vCfg.generatorLabel = WAVE_STYLES[vCfg.waveStyle];
                        else if (vCfg.primaryEngine === 3) vCfg.generatorLabel = ILLUSION_STYLES[vCfg.illusionStyle];
                        else if (vCfg.primaryEngine === 4) vCfg.generatorLabel = GEOMETRY_STYLES[vCfg.geoStyle];
                        else if (vCfg.primaryEngine === 5) vCfg.generatorLabel = SCATTER_STYLES[vCfg.scatterStyle];
                    }

                    if (cfg.varyPalette && paletteKeys.length > 0) {
                        var pChoice = COLOR_PALETTES[paletteKeys[(v - 1) % paletteKeys.length]];
                        vCfg.c1 = pChoice.c1; vCfg.c2 = pChoice.c2; vCfg.c3 = pChoice.c3; vCfg.c4 = pChoice.c4;
                        vCfg.bgHex = pChoice.bg;
                    }

                    if (cfg.varyRotation) {
                        vCfg.rotation = (cfg.rotation + (v - 1) * 22.5) % 360;
                    }

                    if (cfg.varyScale) {
                        var scaleFactor = bRng.range(0.82, 1.25);
                        vCfg.scale = Math.round(cfg.scale * scaleFactor);
                    }

                    if (cfg.varyWave) {
                        vCfg.waveAmp = Math.round(cfg.waveAmp * bRng.range(0.7, 1.4));
                        vCfg.waveFreq = Math.round(cfg.waveFreq * bRng.range(0.75, 1.35) * 10) / 10;
                    }
                }

                var padV = (v < 10) ? ("0" + v) : String(v);
                var baseFileName = vCfg.prefix + "_Var" + padV + "_" + (new Date().getTime());
                lblStatus.text = "Generating Variation " + v + " of " + totalBatch + " (" + vCfg.generatorLabel + ")...";
                progBar.value = Math.round(((v - 0.5) / totalBatch) * 100);
                win.update();

                var createdDoc = null;
                try {
                    var buildRes = buildVectorStudioDocument(vCfg, vCfg.seed, baseFileName);
                    createdDoc = buildRes.doc;

                    var exportedFormatsStr = "None";
                    if (anyExport && outFolderObj && outFolderObj.exists) {
                        var exportRes = exportVariationFormats(
                            createdDoc,
                            outFolderObj,
                            baseFileName,
                            vCfg,
                            v
                        );
                        exportedFormatsStr = (exportRes && exportRes.exportedFiles && exportRes.exportedFiles.length > 0)
                            ? exportRes.exportedFiles.join(", ")
                            : (exportRes && exportRes.join ? exportRes.join(", ") : "None");
                        auditLines.push("[Variation " + padV + "] Seed=" + vCfg.seed + " | Objects=" + buildRes.objectCount + " | Exported: " + exportedFormatsStr);
                    } else {
                        auditLines.push("[Variation " + padV + "] Seed=" + vCfg.seed + " | Objects=" + buildRes.objectCount + " (Open in Illustrator)");
                    }

                    if (cfg.exportCSV) {
                        var cleanKw = sanitizeAndDeduplicateKeywords(cfg.metaKeywords, cfg.metaMaxKw);
                        var primaryExt = cfg.expEPS ? ".eps" : (cfg.expAI ? ".ai" : (cfg.expSVG ? ".svg" : ".png"));
                        csvRows.push({
                            filename: baseFileName + primaryExt,
                            title: cfg.metaTitle + " — Variation " + padV,
                            description: cfg.metaDesc + " (" + vCfg.generatorLabel + ", Seed " + vCfg.seed + ")",
                            keywords: cleanKw,
                            category: cfg.metaCategory,
                            artworkType: "Vector Illustration",
                            generatorStyle: vCfg.generatorLabel,
                            dimensions: vCfg.width + "x" + vCfg.height,
                            formats: exportedFormatsStr
                        });
                    }

                    completedCount++;

                    if (cfg.enableBatch && cfg.closeBatchDocs && anyExport && totalBatch > 1) {
                        createdDoc.close(SaveOptions.DONOTSAVECHANGES);
                        createdDoc = null;
                    }
                } catch (eVar) {
                    failedCount++;
                    ErrorRegistry.log("Batch Variation", eVar, v, vCfg.generatorLabel);
                    auditLines.push("[Variation " + padV + "] FAILED: " + eVar.message);
                    if (createdDoc) {
                        try { createdDoc.close(SaveOptions.DONOTSAVECHANGES); } catch (eCloseIgn) {}
                    }
                }
            }

            progBar.value = 100;
            btnStopBatch.enabled = false;

            if (cfg.exportCSV && csvRows.length > 0 && outFolderObj && outFolderObj.exists) {
                try {
                    var csvFile = writeStockMetadataCSV(outFolderObj, csvRows, cfg.csvSchema);
                    if (csvFile) auditLines.push("Metadata CSV Saved: " + csvFile.fsName);
                } catch (eCsv) {
                    ErrorRegistry.log("CSV Export", eCsv, 0, "MetadataAssistant");
                }
            }

            if (outFolderObj && outFolderObj.exists) {
                try {
                    writeBatchAuditReport(outFolderObj, auditLines);
                } catch (eRep) {}
            }

            lblStatus.text = "Batch complete! " + completedCount + " generated | " + failedCount + " failed.";
            if (failedCount > 0 && completedCount === 0) {
                var lastErr = (ErrorRegistry && ErrorRegistry.errors && ErrorRegistry.errors.length > 0)
                    ? ErrorRegistry.errors[ErrorRegistry.errors.length - 1].message
                    : "Unknown generation error.";
                showStudioDialog(
                    "Generation Failed",
                    "Could not generate vector artwork in Illustrator:\n\n" +
                    "Error: " + lastErr + "\n\n" +
                    "Tip: Check your settings in Tab 1-3 or run the built-in diagnostic test in Tab 5.",
                    false
                );
            } else {
                showStudioDialog(
                    "Studio Production Complete",
                    "Generation Finished!\n\n" +
                    "• Variations Created: " + completedCount + " of " + totalBatch + "\n" +
                    "• Output Directory: " + (anyExport ? outFolderObj.fsName : "Canvas Only (In Illustrator)") + "\n" +
                    "• CSV Metadata: " + (cfg.exportCSV ? "Exported" : "Disabled"),
                    false
                );
            }
        };

        btnCloseStudio.onClick = function () {
            win.close();
        };

        win.center();
        win.show();
    }

    // Launch UI
    launchUltimateVectorStudioUI();
})();
